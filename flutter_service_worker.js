'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "8def20360a6886cff0aaeb34c5c7fb91",
".git/config": "c9b16527755afe7450fba7fde2088788",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "81155a82aec732bcc32d51e1afb54ec3",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a3af7cd5a43f6b5a763f10225c511696",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "991f2456b1101042a03e47aca993d922",
".git/logs/refs/heads/master": "991f2456b1101042a03e47aca993d922",
".git/logs/refs/remotes/github/master": "fc3f032fb8efb68833152655a02c8aa5",
".git/objects/00/80de4fc46bab375284515b076df8c29014f59b": "d95014a7d0c488f7f735cfc6d4e1e857",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/06/b92076de4b82d7d4c21dc96cbda162c3519aad": "7df8ad2388e57e9bc0c5d14376c59cc2",
".git/objects/18/be7b0b38f38fb4ad39c59e25d5e807aa670ba4": "cba52fc8c7d50d36a9e584085c0f4800",
".git/objects/1d/28025ee541e92b6c6fe44e07fdf36efcab2f88": "32634e76cb29e9ba71c2d7812c28ca85",
".git/objects/2b/9decea6550efd2af05d3ca79dea349f7b57e95": "be97d43f06dd756c1788f0f2a7ebaf69",
".git/objects/2f/35d0e2d9a182f171e138a15c9d4d92f58a6791": "dbc63579ffae5f42e5c43aef12d16f17",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/34/9c84371ce40f81410ab686069e25cdfc9ddb32": "e2c5b9c022f0d291e042f328b46b309e",
".git/objects/34/d498c0416850b8ede2367224756330a337b90a": "097da48aecf256e632f0c022c4d7c91c",
".git/objects/35/cabd1fd9f2417c1ca4b39fab10e279735fa54e": "4556707b837f5e1fc9896b5cadd2c491",
".git/objects/3b/145621d98d5147d0af195b39b474ec7466fb5b": "081178f65470f272faa36c5effedffec",
".git/objects/43/9f4aa518b24937f506e131c50500f082bd6bd0": "da9f38e91dc22729bf06ebb697e554e6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/54/ef62fcd7821e5f0c953c37fb029605c6b17b41": "568366f44df83e3fe02a6fbaeb7f501f",
".git/objects/5e/9b444ea2334a0b3c9a4314a17a82d49ffb52ad": "f6585e4cfb906c4096ea5fd46b3dffff",
".git/objects/6a/50ad1eae2744e283ccc262ef6aac3a5c2fd610": "2c5988b57d1efc0e3ea75927ce3aa354",
".git/objects/76/76b11987d83f78e52f13d7bb0bc8de3f0c3e9e": "2012954951d4ea9d5eaca408b3518972",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/fc45f5b0471bce06dde47ef8964a8ce67a85f6": "022f3d96518da4d189c330a1c6801706",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/9c/6f55e6f37f1977695a317347a6cbb7ad8f51f1": "f57d7b15eabeae78ac4796b9862177eb",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/c2c64fc389dc36c713a67b794166b9ebe97a88": "63d147814b86eb723e46860b0a7d296c",
".git/objects/a6/83c5b7abcdd0a17e3d4b6b429e4db10b92ba90": "2deed4680d98e2b4f3e3a96c9b9c014d",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/ddaafc783ea01166da31cebedc9339619e8e29": "85ba782d68c4e761094ad0e9ecb0185a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bf/8667cedd8cc4682541aed610f7bfdb31b017f9": "b70b7898b5f3bb5274e6572fce07a7c2",
".git/objects/cf/8ef4d1924f4338d1f1f0c0abedbc7ec693070d": "a79dc04c98770edd2b0c90d6ed717e29",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/e693e1a44b10dfcbfe475fa06948fb2c19b762": "400a354835f87f57175957fee4254408",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/73de2447aa5c9ce666ec69a954dd41e810c32d": "e2d643a750b3934293122947a9e5b32a",
".git/objects/e7/ab25a89a190a9c2ce6f4580b87e587505dcd1a": "f7a994bc695ac4f0fb2ff0dd9441503e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f3/f9f5c952a35be73069296fd6bc3f0b530258fa": "d8ed2406a1739592ef5660a881dce203",
".git/ORIG_HEAD": "389f2abc68377cb7701f4ee9b85a8b9d",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/master": "bdac8fcd35d4eb6ff10196d5821bf413",
".git/refs/remotes/github/master": "bdac8fcd35d4eb6ff10196d5821bf413",
"assets/AssetManifest.json": "ecc97de7a73c759a89ae0d695fe81aba",
"assets/assets/md.png": "b07dc8b0956ce4b72bf2605d05c45be3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "8483e56a695874c2bfbea2a5c3cc2942",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "05234a4db898e8d69c3ee988b578e693",
"/": "05234a4db898e8d69c3ee988b578e693",
"main.dart.js": "775604a5c2b26eb615573c76758fb0ba",
"manifest.json": "52fc0453b8855eb9dd5b8bde98ad1f4f",
"version.json": "16e9ce38334373940d58b8c1e46336d6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
