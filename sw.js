self.addEventListener("install", (e) => {
  console.log("Service Worker Installed");
  e.waitUntil(
    caches.open("mess-pass-cache").then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
        "/manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
