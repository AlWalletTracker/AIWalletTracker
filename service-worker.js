const CACHE_NAME = 'ganathe-pwa-v1';
const FILES_TO_CACHE = ['/', '/index.html', '/README.md'];
self.addEventListener('install', (evt) => {
  evt.waitUntil(caches.open(CACHE_NAME).then((cache)=>cache.addAll(FILES_TO_CACHE)));
  self.skipWaiting();
});
self.addEventListener('fetch', (evt)=>{
  evt.respondWith(caches.match(evt.request).then((r)=>r || fetch(evt.request)));
});
