const CACHE_NAME = 'info3d-cache-v2';
const urlsToCache = [
  '/info3d/',
  '/info3d/index.html',
  '/info3d/manifest.json',
  '/info3d/fav_icon.png',
  '/info3d/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      )
    )
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match('/info3d/index.html'))
  );
});
