/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "128.png",
    "revision": "25186ac30d1fd819f8e87eface7ded3d"
  },
  {
    "url": "144.png",
    "revision": "91b1d173334a37eeb78a18539068538a"
  },
  {
    "url": "192.png",
    "revision": "c31e28c3b1eb2b490da840dff48c7a24"
  },
  {
    "url": "256.png",
    "revision": "f5411efc200cffb54b077340a1550cf8"
  },
  {
    "url": "404.html",
    "revision": "68aa07f385200d8628655d689d062260"
  },
  {
    "url": "512.png",
    "revision": "6a851b845d82108acff7cfe119efcf97"
  },
  {
    "url": "assets/css/0.styles.1104ab03.css",
    "revision": "35dfcd22da56eb0ef7fb1c43c760b2b8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d298a940.js",
    "revision": "0cfe709502e79cc3acd59f8cbd53189d"
  },
  {
    "url": "assets/js/11.74822f33.js",
    "revision": "334ec7638931d1664e7be33cc5d9df15"
  },
  {
    "url": "assets/js/12.da23e48e.js",
    "revision": "fcef4d377fb8be9084b938ec98405ea3"
  },
  {
    "url": "assets/js/13.39f35035.js",
    "revision": "3bc01393c6dd4b1480d5ab63b7213750"
  },
  {
    "url": "assets/js/14.3f43023f.js",
    "revision": "e7fb40d7bcccfc1cc067e1ea1ec0a0b8"
  },
  {
    "url": "assets/js/15.b624a3b2.js",
    "revision": "fe6154bd1e25ba36270ebbfb7df18f13"
  },
  {
    "url": "assets/js/16.923ec85c.js",
    "revision": "a751efefb2213dda629816225e60c14c"
  },
  {
    "url": "assets/js/17.836a93a7.js",
    "revision": "521e8ba37450a1281891109c49d2d94c"
  },
  {
    "url": "assets/js/18.359e8b46.js",
    "revision": "b529920a2ecc29d05cd30a99543f1afb"
  },
  {
    "url": "assets/js/2.626f6268.js",
    "revision": "86a5c1213b0981fe9802335b89c9d460"
  },
  {
    "url": "assets/js/3.82bdc1ec.js",
    "revision": "282067c9bce5b58b9455d7f185650545"
  },
  {
    "url": "assets/js/4.02c0e270.js",
    "revision": "ac6e1dd2366b055e4a01d99435437508"
  },
  {
    "url": "assets/js/5.5dd70e70.js",
    "revision": "619cf999b268f529d42a8da91fca4569"
  },
  {
    "url": "assets/js/6.7338e818.js",
    "revision": "db3be6db0cdc78058307e476d0f3acbf"
  },
  {
    "url": "assets/js/7.eef7ee82.js",
    "revision": "9a67e190ea4b082fbf778df700a764f7"
  },
  {
    "url": "assets/js/8.fb16906e.js",
    "revision": "987224be8a254a2a9c184a8e9e2826fd"
  },
  {
    "url": "assets/js/9.ca1f2ada.js",
    "revision": "7dc5c6b26c47a81f1adc16c618de277f"
  },
  {
    "url": "assets/js/app.913155c5.js",
    "revision": "f400a8026d29aeb15cd26d72aa1a9427"
  },
  {
    "url": "hobby/index.html",
    "revision": "1c5c0d73a3fddf6794e4d6e73c7a6291"
  },
  {
    "url": "index.html",
    "revision": "d55309115fecdc0f86d0599b1f477a23"
  },
  {
    "url": "major/index.html",
    "revision": "4eeb36032b85d0a4612b60ba07105211"
  },
  {
    "url": "major/others/index.html",
    "revision": "2f1370ca92c0895076e81b349c5cec61"
  },
  {
    "url": "major/others/使用 VuePress 搭建个人博客.html",
    "revision": "77f049a250f6dd51743dcc4bcfb767e8"
  },
  {
    "url": "major/others/计算机三级网络技术考过指南.html",
    "revision": "a5a96204e779776a82b35f6e8097a54a"
  },
  {
    "url": "major/react/index.html",
    "revision": "c21420bbcd81a64410877d2774ceea83"
  },
  {
    "url": "major/vue/index.html",
    "revision": "a673fbecfb0429809244016e55c0275d"
  },
  {
    "url": "video/index.html",
    "revision": "3f7e981a07bc3da1d738f7dc98b9f831"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
