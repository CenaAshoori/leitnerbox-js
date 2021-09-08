'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "948df7f4d4330de0b8d73f776f300216",
".git/config": "cdd1db1fb8789930c5ae4056c0e57563",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ebdb14cbab94e51d8bcd3f3db7747de5",
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
".git/index": "c38741237ca14bd6abc533c9060216d7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9faa72a84a99f772bba52fd8da731edb",
".git/logs/refs/heads/master": "9faa72a84a99f772bba52fd8da731edb",
".git/logs/refs/remotes/github/master": "6b089f719f3103ccb73f06e919f8bb5c",
".git/logs/refs/remotes/server/master": "df2bc284ad4013d75e76f7fb16c68d82",
".git/objects/00/80de4fc46bab375284515b076df8c29014f59b": "d95014a7d0c488f7f735cfc6d4e1e857",
".git/objects/02/e5c964ac8d6abcfdae06c6a434b0f5832ae4a0": "41e98fa96405eaa8368a2a28f729a391",
".git/objects/03/69ada0025313277e9dd65534e802152ba6eef4": "e1fff9a62de996acceb7bafe440c38b4",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/06/b92076de4b82d7d4c21dc96cbda162c3519aad": "7df8ad2388e57e9bc0c5d14376c59cc2",
".git/objects/08/76450e8158c437da45d319c81d9b130360c25d": "c998b6ca3767e3b784798edb2f1e38ec",
".git/objects/08/b5a95d2a9d3adaabab949afc18f34baca8691c": "9177b8c70256a59f593ffef73b525254",
".git/objects/0c/1bc845e04890f98343ac1434082888806d6f0a": "6a78e8bf5c451da1da440aca1b3f67b2",
".git/objects/0c/f0d98be12ed76563227e3435c2b7832ecda19b": "4889230ffbf69e4a02f056fdee5d269f",
".git/objects/0e/80903f85def65e2d89badcc8f1e5aae313ed1f": "9d6436d52dd1e8efce5a7db2e8f705d1",
".git/objects/18/be7b0b38f38fb4ad39c59e25d5e807aa670ba4": "cba52fc8c7d50d36a9e584085c0f4800",
".git/objects/1a/5861242dd76fd7e0105bb67550ce95e2cbe653": "0cc143f764526a71e14bbd79bd3f79a3",
".git/objects/1c/b8234103020a1efb229eeb172893f850099671": "ea494f14dd98f6ed5a5d6c68f24ce07e",
".git/objects/1d/28025ee541e92b6c6fe44e07fdf36efcab2f88": "32634e76cb29e9ba71c2d7812c28ca85",
".git/objects/2b/9decea6550efd2af05d3ca79dea349f7b57e95": "be97d43f06dd756c1788f0f2a7ebaf69",
".git/objects/2c/f6b6b65800efae9e5f6ba412e3a8ff672ce38a": "b2e610ec25118021f797d6d510079ea6",
".git/objects/2e/7d4f6b26b0371db7b64b50ed8d453763cfb9e8": "13e1ebd79c3a126ad625513e640da581",
".git/objects/2f/35d0e2d9a182f171e138a15c9d4d92f58a6791": "dbc63579ffae5f42e5c43aef12d16f17",
".git/objects/2f/8dc11d6c696a122827be32aeb114ae1ea311ac": "8a30d4386d0d9ffd02a7bf939d5e4eab",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/34/9c84371ce40f81410ab686069e25cdfc9ddb32": "e2c5b9c022f0d291e042f328b46b309e",
".git/objects/34/d498c0416850b8ede2367224756330a337b90a": "097da48aecf256e632f0c022c4d7c91c",
".git/objects/35/cabd1fd9f2417c1ca4b39fab10e279735fa54e": "4556707b837f5e1fc9896b5cadd2c491",
".git/objects/38/24699196acc4733aab6821d60886583371b9d2": "557a7bfc18e9b9979542851ff23472e1",
".git/objects/38/505d3b1ea805bf3d773ccc6fde47b8dae4d35d": "82f721bdda698a89d8861fd68f37a808",
".git/objects/3b/145621d98d5147d0af195b39b474ec7466fb5b": "081178f65470f272faa36c5effedffec",
".git/objects/3c/652bd2312910d46663581ca7ca3d3161e4f95a": "30da7f3f5a2820e6df94223f010c0ae7",
".git/objects/43/9f4aa518b24937f506e131c50500f082bd6bd0": "da9f38e91dc22729bf06ebb697e554e6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/8f4317d884820f7f934942b3428a938cd45142": "645440d8eab49155c24c8a767b1c8a92",
".git/objects/47/b070ed09121a464985562d12ad0ae0b48a6034": "fde6a7536d4e00cea24db7806a21ae60",
".git/objects/4f/fffd4d06cd03456004f0463a67d1e8916740bf": "7a281ecbebbe1001802a6f24e4f49ce7",
".git/objects/50/479a888c4d113303b8f316ac19df9a905acdd3": "e20bca138cb9b5c1fbcdd421f2791a52",
".git/objects/51/4480c648bdf1c88b765a93e75401c4a62ad04f": "91695d3a5f519c7a169d6c743763d56e",
".git/objects/52/961125da6a5893705bb09a3aa53de30eb001b8": "a528dc7d7e6597fa314add6a84b38df0",
".git/objects/54/8797241d25de8077d777e6ac5ee1ac9488e06f": "df888c6588a49b0e20b78a1eddb729e3",
".git/objects/54/ef62fcd7821e5f0c953c37fb029605c6b17b41": "568366f44df83e3fe02a6fbaeb7f501f",
".git/objects/56/ddc97fd0d7a56d87a9d7ec6cffa79bceccd92e": "eb93e9708b26720fdbd384f637deae70",
".git/objects/5b/09ee2db7769d942bd328e6d7ecacc82f0c0abc": "1b753ee7554557967066c663e6528359",
".git/objects/5b/9695ef69f38bda5a851d9f9749e893792e01c9": "5a1cb7691c97627e58dc8134e9761881",
".git/objects/5e/9b444ea2334a0b3c9a4314a17a82d49ffb52ad": "f6585e4cfb906c4096ea5fd46b3dffff",
".git/objects/61/2b8254c6e1d346bb69685d83f77b11ff38122a": "e51a1ed4ad89eda0280413f5dd708fef",
".git/objects/63/098633d4e378189e32c2a351df467d4aed5047": "eb76561851ca806c3c022ab0ac8ff8c6",
".git/objects/63/b165148a14f0a14a40d2ea03dc0f2ccb2914b3": "c5d9547540a83ad45a450472c68a2fe7",
".git/objects/69/8352d064a9aa12d325686660540d5a8d7bf31b": "91b7d5bcb2b81b24f8007fcff008c950",
".git/objects/6a/50ad1eae2744e283ccc262ef6aac3a5c2fd610": "2c5988b57d1efc0e3ea75927ce3aa354",
".git/objects/6b/33450e26c33708eb6806799d8a3a8776bb9086": "7ec8cb7d828c9a6946eca8729756cc39",
".git/objects/6c/b4282a2d43e9e69c3b77126042c91d050efb50": "4fe1ec09085a1d7b84ed7cec27530e0d",
".git/objects/6c/b96d13d393ed9383763593b3b78ec8018887ae": "d4bb05a7d6cb1bb148e416f78f87a6c1",
".git/objects/75/67102c9babb4d8f01577c19a6587d4a4a5908b": "bf06ef7ed276edf50f0ed7c11db14287",
".git/objects/76/76b11987d83f78e52f13d7bb0bc8de3f0c3e9e": "2012954951d4ea9d5eaca408b3518972",
".git/objects/78/ccbba0d5b69ff836bce1070463a9e0be550e70": "08aeee9949f420ee4b26db406a383d89",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/61ee12c34c5507ba35638e8414473ba1c74fcc": "e7a8d7b5dbd14849cb46a2cc259b8dcb",
".git/objects/7a/fc45f5b0471bce06dde47ef8964a8ce67a85f6": "022f3d96518da4d189c330a1c6801706",
".git/objects/84/0114e17238f5b420d47398520f2fda8bcec5ad": "3112b53e6ff13adbdcd25c2bcabe1ffb",
".git/objects/86/3a8eaf1a21bab9b9703f242130456706548745": "0b464d4f0fce2d87ca9fa37487ea2c91",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/88da47b3cbaea3fefb2611e6bb831a80f74e49": "f5c31f322a42bfec3f63a072250cb061",
".git/objects/89/ccf679676954cab9cd3a569eef871ee817cfad": "bb8e83e5d34a128ab3e235da84d9d738",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/92/cf460ad188fc0c986e41a1ab24df2d63d1b28f": "0dc27be1a57913e03393d4bacad44f39",
".git/objects/93/bfb8e70dc97a97aea349ee2860206154400ba9": "ff372467f30837b9b4a28c713cfe6479",
".git/objects/93/c34557e91ec329e816bf35fd8071e161361a7b": "6dc14093fe185b76d5c115a0e500d105",
".git/objects/99/14b6b43b66311e07028893cf1de1cea9700889": "623b8b97606551e6a174f7fb42127ad2",
".git/objects/9c/6f55e6f37f1977695a317347a6cbb7ad8f51f1": "f57d7b15eabeae78ac4796b9862177eb",
".git/objects/9f/bb0a342c1ed61154bbf2c16b3bd4ac3e4eb263": "91fd627758a119d813f3a24d27116350",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/c2c64fc389dc36c713a67b794166b9ebe97a88": "63d147814b86eb723e46860b0a7d296c",
".git/objects/a6/83c5b7abcdd0a17e3d4b6b429e4db10b92ba90": "2deed4680d98e2b4f3e3a96c9b9c014d",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/3b56ae536dc984a136c824bb65a1c199d93d14": "5d1a6b998a6dc9945a28f8aacbcffd2e",
".git/objects/aa/710997089f66825b6284f4ebf2c229d5576b39": "be9914b56255fc2f4c80e969a6e094c4",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/3fd3eda7b26a5071ec8709ede198e99bb1756a": "df86436f09606dea2c7cddf8ade8fa0c",
".git/objects/ae/d67a9d62844cc5e5581fbd6c5e2d4170a8892c": "01f83508f82c6d594644d5687db0a279",
".git/objects/ae/ddaafc783ea01166da31cebedc9339619e8e29": "85ba782d68c4e761094ad0e9ecb0185a",
".git/objects/b1/3a630595e9b4722b63eb3d0e9b53a04fc996f7": "63ce8b0a0e3bff7a1a0c336b618f305f",
".git/objects/b1/dcb6414a434ca2e6a520bd107d7e1fc0223790": "b343aa0ecf44a05f59964c2f6a6dce51",
".git/objects/b6/8de9a06b8b64bd4a7df4c5eed16f03ef822f75": "443b518a960d9e67feabe989a14601e3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/242f9c76b172246d46749577399ed09967c5e9": "578559eb3396aee0a5f9d798e040c718",
".git/objects/bf/8667cedd8cc4682541aed610f7bfdb31b017f9": "b70b7898b5f3bb5274e6572fce07a7c2",
".git/objects/c4/0d5cd8a89fb722cb0e28a24b3468600270b8f0": "50d330325c4b575c1aa7dc3249004b2e",
".git/objects/c4/5f7d902822b241f7cc96940504d0cc52811507": "c7e528e0dc1968e526ae7fcabbd0c0dd",
".git/objects/c6/b16ae62a7e6a5df127ebf93177ed4961199527": "fc639404860680403781b117c73e3c51",
".git/objects/ce/2244967b548c2f8de4482592299a89c7ea8df6": "d885034f9b540dc2b88ce1ee98a6d76d",
".git/objects/cf/8ef4d1924f4338d1f1f0c0abedbc7ec693070d": "a79dc04c98770edd2b0c90d6ed717e29",
".git/objects/cf/9bcc630a0c438ee33bace7061fd2b72b2133f3": "f9f738de30997a133e8bb002687cee0d",
".git/objects/d5/0a6642a313c9fb52f0ddb25a2242c16358adb9": "47619970849486497b5eb3acf1cfd5cb",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2d733b4fb6c3b495e1321d87cd3b53533e28d0": "340a0c5a70b0eeef2d051ba07fc8bf9a",
".git/objects/d8/e693e1a44b10dfcbfe475fa06948fb2c19b762": "400a354835f87f57175957fee4254408",
".git/objects/d8/f408dd30412e532e4d0399426fc9c9db8a5e7b": "9806704edd8f676808a757bb0aa62595",
".git/objects/dc/20c1eb44a14a3d089e9952b9e0e41a10677beb": "208d550db303b046d2e4980d613fb5e9",
".git/objects/e1/692fb47e7d3eb5b6907a5748ee9e2085417db7": "05a6a5a00e051a4374673d88e1791773",
".git/objects/e1/fb49bdf5ba002ca4327b1fa477e421a53279e8": "364094281b0ce49afdf46d828df3581b",
".git/objects/e3/8d212def6525e34c15c142d1d00e6c2cf5d78d": "8fbfaada1dd5b089f7b2974d11c55fed",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/73de2447aa5c9ce666ec69a954dd41e810c32d": "e2d643a750b3934293122947a9e5b32a",
".git/objects/e7/ab25a89a190a9c2ce6f4580b87e587505dcd1a": "f7a994bc695ac4f0fb2ff0dd9441503e",
".git/objects/e9/5a7807772e91676ccc7bec6b09455081257f2f": "5fa837468266ced470b07818946f6df5",
".git/objects/ea/9425109acc1b9f4e8721bd3fa9cbfec988d067": "f31d1fc3e93f33246debc6132cfb55bb",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/8a377ddcc4bf6d3735deb0e1c399dbafeeba2a": "eda3d69085e0e49b6f07e37bc0b15a4d",
".git/objects/ed/94c56dff608e75a218b7a4deed02bb487b6dc9": "789449bd0ac6dd2fe4d4b9ceeeabe97b",
".git/objects/ee/21181ee8d8ae9c3b21074c318d8cf48aadb7a3": "64fef11f61a1e77d63dc76c97f135a35",
".git/objects/f0/2b50a55ff90cd5ac93da54bfa5c87991e24dfc": "fb23188c1b4621b71638b3a40074f982",
".git/objects/f0/5bb39edd95ee2b5b35c0488e5c74177afc88f4": "88bb13e10f548a4c4e4c71cbdc662d64",
".git/objects/f2/7bfdacf0e2f59d350041a0deec08ee42676183": "99cee07739fc8f95037304a4e74424de",
".git/objects/f3/f9f5c952a35be73069296fd6bc3f0b530258fa": "d8ed2406a1739592ef5660a881dce203",
".git/objects/f6/39619a5850f349899a6ac1225ee00219c73109": "76fad967882af64ffd281953ad1efc1d",
".git/objects/f8/ab26264d0024681df826f1df25ce7867fc6d5f": "f05e82ffa595e068b0efafa579235652",
".git/objects/fc/83645fac6295ab552d25c75e62a859de2da594": "b89f38a82cef23d950d8a90f8e2d0e96",
".git/objects/ff/5fb9f103f88f029f1436bb0a3987c750f57196": "dc12ebabe032c8230cdfbfb65eb87459",
".git/ORIG_HEAD": "bb16b78e576f9f64a5451ef0389248bf",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/master": "e51aa7427967915e728265c73e7f835c",
".git/refs/remotes/github/master": "4b189be6a8a756a2bf811f529e856a6c",
".git/refs/remotes/server/master": "e51aa7427967915e728265c73e7f835c",
"assets/AssetManifest.json": "0d1412b1736ea55b41f8f385496f4f8e",
"assets/assets/md.png": "b07dc8b0956ce4b72bf2605d05c45be3",
"assets/assets/moon-regular.svg": "6f1f85f3a1c1a07ace28f724b77de4c2",
"assets/assets/moon-solid.svg": "399b1420858b9b19d9046a66f05227a8",
"assets/assets/sun-regular.svg": "fbffcf4c0463919a493c67a071c8ec21",
"assets/assets/sun-solid.svg": "aa59b8a4563d9e4bab5397881af52dcd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "299ed71d5c050c36476b6f7297d4ec26",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "57aac33ea653e26b4d86e22fd36c488c",
"/": "57aac33ea653e26b4d86e22fd36c488c",
"main.dart.js": "3c9921f09a813f34a15e76b3f4f8985e",
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
