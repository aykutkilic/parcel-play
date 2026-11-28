// A worker serves the HTML and modules installed together for its release.
// Failed or incomplete installations leave the previous worker in control.
const VERSION = "d3994ff-20261128072726197";
const SHELL = ["shell-d3994ff-20261128072726197.html","parcel-d3994ff-20261128072726197.css","lobby-preview.webp","manifest.webmanifest","icons/icon-192.png","parcel-d3994ff-20261128072726197.js","chunk-chunk-7J6XLPGA.js","chunk-chunk-QIIELIOR.js","chunk-chunk-QNKBZBNZ.js","chunk-chunk-HXVKYEOY.js","chunk-chunk-YNEPLUHX.js","chunk-chunk-BIKQNJ4A.js"];
const PAGE = "shell-d3994ff-20261128072726197.html";
const prefix = 'parcel:' + self.registration.scope + ':';
const cacheName = prefix + VERSION;
const absolute = path => new URL(path, self.registration.scope).href;
const required = new Set(SHELL.map(absolute));

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(cacheName);
    await cache.addAll(SHELL.map(path => new Request(absolute(path), { cache: 'reload' })));
  })());
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    for (const name of await caches.keys()) {
      if (name.startsWith(prefix) && name !== cacheName) await caches.delete(name);
      else if (name.startsWith('parcel-')) {
        const legacy = await caches.open(name);
        if (await legacy.match(absolute('./'))) await caches.delete(name);
      }
    }
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET' || !req.url.startsWith(self.registration.scope) || req.headers.has('range')) return;
  const url = new URL(req.url);
  if (/\/(ws|version\.json)$/.test(url.pathname)) return;
  const page = req.mode === 'navigate';
  const key = page ? absolute(PAGE) : req.url;
  event.respondWith((async () => {
    const cache = await caches.open(cacheName);
    if (page || required.has(key) || /\/chunk-[\w-]+\.js$/.test(url.pathname)) {
      const hit = await cache.match(key);
      if (hit) return hit;
    }
    try {
      const response = await fetch(req);
      if (!page && response.ok && response.type === 'basic') {
        try { await cache.put(req, response.clone()); } catch { /* storage may be full */ }
      }
      return response;
    } catch (error) {
      const hit = await cache.match(key);
      if (hit) return hit;
      throw error;
    }
  })());
});
