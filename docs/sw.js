// sw.js (service worker)

const cacheName = 'hexrgb-v0-5-3';
const swfiles = [
  './',
  './index.html',
  './app.js',
  './style.css',
  './favicon.ico',
  './icon/icon512.png',
];

const contentToCache = [];
contentToCache.concat(swfiles);

self.addEventListener('install', (evt) => {
  console.log('[sw.js] Install');
  evt.waitUntil(
    (async () => {
      const cache = await caches.open(cacheName);
      console.log('[sw.js] Caching all: app shell and content');
      await cache.addAll(contentToCache);
    })(),
  );
});

