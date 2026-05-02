const CACHE_NAME = 'notes-v1';
const urls = [
  '/NotesApp/',
  '/NotesApp/index.html'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(urls)));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
