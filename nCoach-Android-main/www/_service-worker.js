var CACHE_NAME = "NCoach-Mobile-PWA-v543-LTR";
var REQUIRED_FILES = ["index.html"];
self.addEventListener("install", function (adline) {
  // console.log("install");
  adline.waitUntil(caches.open(CACHE_NAME).then(function (olajide) {
    return olajide.addAll(REQUIRED_FILES);
  }).then(function () {
    return self.skipWaiting();
  }));
});
self.addEventListener("fetch", function (maksimus) {
  // console.log("fetch");
  maksimus.respondWith(caches.match(maksimus.request).then(function (sadeja) {
    if (sadeja) {
      return sadeja;
    }
    ;
    return fetch(maksimus.request);
  }));
});
self.addEventListener("activate", function (shameya) {
  // console.log("activate");
  shameya.waitUntil(self.clients.claim());
});
