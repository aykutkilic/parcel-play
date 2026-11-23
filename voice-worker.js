// The narrator's voice: Supertonic 3 (Supertone Inc., MIT) running live in
// this worker with onnxruntime-web – WebGPU when the browser has it, else
// WebAssembly. The model (about 400 MB) comes once from Hugging Face and is
// kept in the browser's Cache Storage; nothing is prerecorded.
//
// Inference follows Supertonic's reference helper (as vendored in
// claudespeak, github.com/aykutkilic/claudespeak): text → unicode ids →
// duration predictor → text encoder → a few flow-matching steps of the
// vector estimator → vocoder.
//
//   main → { t: 'load', voice }                    worker → { t: 'progress', loaded, total } { t: 'ready', backend } { t: 'error', text }
//   main → { t: 'say', id, text, lang, voice, steps, speed }   worker → { t: 'audio', id, pcm, sampleRate } { t: 'fail', id }
/* eslint-env worker */
/* global ort */

const ORT = 'https://cdn.jsdelivr.net/npm/onnxruntime-web@1.31.1/dist/';
const MODEL = 'https://huggingface.co/supertone-oss-archive/supertonic-3/resolve/aafc6e32416a594460b32413efc49d7fe4ce6d46/';
const FILES = { dp: 'onnx/duration_predictor.onnx', enc: 'onnx/text_encoder.onnx', vec: 'onnx/vector_estimator.onnx', voc: 'onnx/vocoder.onnx' };
const SIZES = { dp: 3700147, enc: 36416150, vec: 256534781, voc: 101424195 };
const CACHE = 'parcel-voice-supertonic3-v1';
const LANGS = ['en', 'ko', 'ja', 'ar', 'bg', 'cs', 'da', 'de', 'el', 'es', 'et', 'fi', 'fr', 'hi', 'hr', 'hu', 'id', 'it', 'lt', 'lv', 'nl', 'pl', 'pt', 'ro', 'ru', 'sk', 'sl', 'sv', 'tr', 'uk', 'vi', 'na'];

let engine = null, loading = null;
const styles = {};

importScripts(`${ORT}ort.webgpu.min.js`);
ort.env.wasm.wasmPaths = ORT;
ort.env.wasm.numThreads = self.crossOriginIsolated ? Math.min(4, navigator.hardwareConcurrency || 2) : 1;

// a file from the cache, or downloaded (with progress) and cached
async function fetchCached(path, onBytes) {
  const url = MODEL + path;
  let cache = null;
  try { cache = await caches.open(CACHE); } catch { /* no Cache Storage (private mode?) */ }
  if (cache) {
    const hit = await cache.match(url);
    if (hit) { const b = await hit.arrayBuffer(); onBytes(b.byteLength); return b; }
  }
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${path}: HTTP ${res.status}`);
  const reader = res.body.getReader();
  const parts = [];
  let n = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    parts.push(value);
    n += value.byteLength;
    onBytes(value.byteLength);
  }
  const buf = new Uint8Array(n);
  let o = 0;
  for (const p of parts) { buf.set(p, o); o += p.byteLength; }
  if (cache) { try { await cache.put(url, new Response(buf.slice().buffer)); } catch { /* quota: fine, just not kept */ } }
  return buf.buffer;
}

async function session(buf) {
  const eps = navigator.gpu ? [['webgpu', 'wasm'], ['wasm']] : [['wasm']];
  let last = null;
  for (const executionProviders of eps) {
    try { return { s: await ort.InferenceSession.create(buf, { executionProviders, graphOptimizationLevel: 'all' }), ep: executionProviders[0] }; } catch (e) { last = e; }
  }
  throw last;
}

async function load(voice) {
  const total = Object.values(SIZES).reduce((a, b) => a + b, 0);
  let loaded = 0, lastSent = 0;
  const onBytes = (n) => {
    loaded += n;
    if (loaded - lastSent > 2e6 || loaded >= total) { lastSent = loaded; postMessage({ t: 'progress', loaded, total }); }
  };
  const json = async (p) => JSON.parse(new TextDecoder().decode(await fetchCached(p, () => {})));
  const [cfgs, indexer] = await Promise.all([json('onnx/tts.json'), json('onnx/unicode_indexer.json')]);
  const bufs = {};
  for (const k of Object.keys(FILES)) bufs[k] = await fetchCached(FILES[k], onBytes);
  const sess = {};
  let backend = 'wasm';
  for (const k of Object.keys(FILES)) { const r = await session(bufs[k]); sess[k] = r.s; if (r.ep === 'webgpu') backend = 'webgpu'; bufs[k] = null; }
  engine = {
    cfgs, indexer, sess, backend,
    sr: cfgs.ae.sample_rate, chunk: cfgs.ae.base_chunk_size * cfgs.ttl.chunk_compress_factor,
    ldim: cfgs.ttl.latent_dim * cfgs.ttl.chunk_compress_factor,
  };
  await style(voice);
  return engine;
}

async function style(voice) {
  if (styles[voice]) return styles[voice];
  const st = JSON.parse(new TextDecoder().decode(await fetchCached(`voice_styles/${voice}.json`, () => {})));
  const flat = (o) => Float32Array.from(o.data.flat(Infinity));
  styles[voice] = {
    ttl: new ort.Tensor('float32', flat(st.style_ttl), st.style_ttl.dims),
    dp: new ort.Tensor('float32', flat(st.style_dp), st.style_dp.dims),
  };
  return styles[voice];
}

// ---------------------------------------------------------------- text (as in Supertonic's helper)

function preprocess(text, lang) {
  text = text.normalize('NFKD');
  text = text.replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}]+/gu, '');
  const rep = { '–': '-', '‑': '-', '—': '-', '_': ' ', '“': '"', '”': '"', '‘': "'", '’': "'", '´': "'", '`': "'", '[': ' ', ']': ' ', '|': ' ', '/': ' ', '#': ' ', '→': ' ', '←': ' ' };
  for (const [k, v] of Object.entries(rep)) text = text.replaceAll(k, v);
  text = text.replace(/[♥☆♡©\\]/g, '');
  text = text.replaceAll('@', ' at ');
  text = text.replace(/ ,/g, ',').replace(/ \./g, '.').replace(/ !/g, '!').replace(/ \?/g, '?').replace(/ ;/g, ';').replace(/ :/g, ':').replace(/ '/g, "'");
  while (text.includes('""')) text = text.replace('""', '"');
  while (text.includes("''")) text = text.replace("''", "'");
  text = text.replace(/\s+/g, ' ').trim();
  if (!/[.!?;:,'"')\]}…。」』】〉》›»]$/.test(text)) text += '.';
  if (!LANGS.includes(lang)) lang = 'en';
  return `<${lang}>${text}</${lang}>`;
}

function chunks(text, maxLen = 300) {
  const out = [];
  let cur = '';
  for (const s of text.trim().split(/(?<=[.!?])\s+/)) {
    if (cur.length + s.length + 1 <= maxLen) cur += (cur ? ' ' : '') + s;
    else { if (cur) out.push(cur); cur = s; }
  }
  if (cur) out.push(cur);
  return out;
}

const gauss = () => Math.sqrt(-2 * Math.log(Math.max(1e-10, Math.random()))) * Math.cos(2 * Math.PI * Math.random());

async function infer(text, lang, st, steps, speed) {
  const e = engine;
  const processed = preprocess(text, lang);
  const ids = Array.from(processed).map((ch) => e.indexer[ch.charCodeAt(0)] ?? 0);
  const n = ids.length;
  const textIds = new ort.Tensor('int64', BigInt64Array.from(ids.map((x) => BigInt(x))), [1, n]);
  const textMask = new ort.Tensor('float32', new Float32Array(n).fill(1), [1, 1, n]);
  const dp = await e.sess.dp.run({ text_ids: textIds, style_dp: st.dp, text_mask: textMask });
  const duration = dp.duration.data[0] / speed;
  const enc = await e.sess.enc.run({ text_ids: textIds, style_ttl: st.ttl, text_mask: textMask });
  const wavLen = Math.floor(duration * e.sr);
  const latentLen = Math.floor((duration * e.sr + e.chunk - 1) / e.chunk);
  const valid = Math.floor((wavLen + e.chunk - 1) / e.chunk);
  const mask = new Float32Array(latentLen);
  for (let t = 0; t < latentLen; t++) mask[t] = t < valid ? 1 : 0;
  let latent = new Float32Array(e.ldim * latentLen);
  for (let d = 0; d < e.ldim; d++) for (let t = 0; t < latentLen; t++) latent[d * latentLen + t] = gauss() * mask[t];
  const latentMask = new ort.Tensor('float32', mask, [1, 1, latentLen]);
  const total = new ort.Tensor('float32', new Float32Array([steps]), [1]);
  for (let step = 0; step < steps; step++) {
    const r = await e.sess.vec.run({
      noisy_latent: new ort.Tensor('float32', latent, [1, e.ldim, latentLen]),
      text_emb: enc.text_emb, style_ttl: st.ttl, text_mask: textMask, latent_mask: latentMask,
      total_step: total, current_step: new ort.Tensor('float32', new Float32Array([step]), [1]),
    });
    latent = Float32Array.from(r.denoised_latent.data);
  }
  const voc = await e.sess.voc.run({ latent: new ort.Tensor('float32', latent, [1, e.ldim, latentLen]) });
  return voc.wav_tts.data.slice(0, wavLen);
}

async function say({ text, lang, voice, steps, speed }) {
  const st = await style(voice);
  const parts = [];
  for (const c of chunks(text)) parts.push(await infer(c, lang, st, steps, speed));
  const gap = Math.floor(0.25 * engine.sr);
  const len = parts.reduce((a, p) => a + p.length, 0) + gap * Math.max(0, parts.length - 1);
  const pcm = new Float32Array(len);
  let o = 0;
  parts.forEach((p, k) => { pcm.set(p, o); o += p.length + (k < parts.length - 1 ? gap : 0); });
  return pcm;
}

onmessage = async (ev) => {
  const m = ev.data;
  if (m.t === 'load') {
    try {
      loading = loading || load(m.voice);
      const e = await loading;
      postMessage({ t: 'ready', backend: e.backend });
    } catch (e) { loading = null; postMessage({ t: 'error', text: String(e && e.message || e) }); }
  } else if (m.t === 'say') {
    try {
      if (!engine) await (loading || Promise.reject(new Error('not loaded')));
      const pcm = await say(m);
      postMessage({ t: 'audio', id: m.id, pcm, sampleRate: engine.sr }, [pcm.buffer]);
    } catch (e) { postMessage({ t: 'fail', id: m.id, text: String(e && e.message || e) }); }
  }
};
