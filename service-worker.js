const CACHE_NAME = "celuna-prototype-v10";
const ASSETS = [
  "/",
  "/index.html",
  "/styles.css",
  "/app.js",
  "/supabase-config.js",
  "/manifest.webmanifest",
  "/assets/celuna-logo.png",
  "/assets/apple-touch-icon.png",
  "/assets/icon-192.png",
  "/assets/icon-512.png",
  "/assets/celuna-app-icon.png",
  "/assets/apple-touch-icon-v9.png",
  "/assets/icon-192-v9.png",
  "/assets/icon-512-v9.png",
  "/assets/celuna-app-icon-v9.png",
  "/assets/apple-touch-icon-v10.png",
  "/assets/icon-192-v10.png",
  "/assets/icon-512-v10.png",
  "/assets/celuna-app-icon-v10.png"
];

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
