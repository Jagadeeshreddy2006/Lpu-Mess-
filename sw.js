// sw.js - minimal service worker just to make the app installable

self.addEventListener("install", (event) => {
  console.log("Service worker installed");
  // You can skip waiting if you want immediate activation:
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("Service worker activated");
});

// No fetch handler needed for installability, but you can add later if you want offline.
