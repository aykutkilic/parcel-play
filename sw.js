// Makes the game an app: it opens without a connection (playing with others
// still needs one). The newest version always wins when there is a network;
// files named after a release, sounds and icons come from the cache.
const VERSION = '3d0cdc8-11240649';
const CACHE = `parcel-${VERSION}`;
const SHELL = ['./', 'manifest.webmanifest', 'icons/icon-192.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => Promise.allSettled(SHELL.map((u) => c.add(new Request(u, { cache: 'reload' }))))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  // (only this game's caches: other sites may share the origin)
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => /^parcel-/.test(k) && k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});

const keep = (req, res) => { if (res.ok && res.type === 'basic' && res.status === 200) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {}); } return res; };
self.addEventListener('fetch', (e) => {
  const req = e.request, url = new URL(req.url), scope = new URL(self.registration.scope);
  if (req.method !== 'GET' || url.origin !== scope.origin || !url.pathname.startsWith(scope.pathname) || req.headers.has('range')) return;
  if (/\/(ws|version\.json)$/.test(url.pathname)) return;
  if (req.mode === 'navigate') {
    // (an invite link, ?room=…, is the same page)
    e.respondWith(fetch(req).then((res) => { if (res.ok) keep(new Request('./'), res); return res; }).catch(() => caches.match('./', { cacheName: CACHE }).then((r) => r || Response.error())));
    return;
  }
  if (/\/parcel-[^/]+\.(js|css)$|\/sfx\/|\/icons\//.test(url.pathname)) {
    e.respondWith(caches.match(req, { cacheName: CACHE }).then((hit) => hit || fetch(req).then((res) => keep(req, res))));
    return;
  }
  e.respondWith(fetch(req).then((res) => keep(req, res)).catch(() => caches.match(req, { cacheName: CACHE }).then((r) => r || Response.error())));
});
