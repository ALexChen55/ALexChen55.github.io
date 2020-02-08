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
    "revision": "1865c3bf71063dc80117f07ceb99602b"
  },
  {
    "url": "512.png",
    "revision": "6a851b845d82108acff7cfe119efcf97"
  },
  {
    "url": "assets/css/0.styles.727ef236.css",
    "revision": "df3d4184060b0716ce7e7b81e1cffb35"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4cff29b4.js",
    "revision": "5029cc0d174ee10245d0fc27eac3ef84"
  },
  {
    "url": "assets/js/11.802d3f4c.js",
    "revision": "b4ce2601405ed3149b700069d87d28fd"
  },
  {
    "url": "assets/js/2.030980c5.js",
    "revision": "82fe085e0e8efe37be25024b1f2c34b1"
  },
  {
    "url": "assets/js/3.9c7a681d.js",
    "revision": "d22dc06ea261b36310d804698863ffeb"
  },
  {
    "url": "assets/js/4.dad3b7e8.js",
    "revision": "26ae3fa799ddc9891e8e1763cdbd748e"
  },
  {
    "url": "assets/js/5.3a116b70.js",
    "revision": "09a642ee8811e0105b8d119cb2c97d78"
  },
  {
    "url": "assets/js/6.28afd29f.js",
    "revision": "68cc9045ef0e06e3d5e876a9716a8f8d"
  },
  {
    "url": "assets/js/7.10ba33f5.js",
    "revision": "ee0dfc70447a02b4e63329160e026c53"
  },
  {
    "url": "assets/js/8.c87f609f.js",
    "revision": "56e1e8d030292336dd9e2fce2d2a8688"
  },
  {
    "url": "assets/js/9.0930475f.js",
    "revision": "989b90d48d0fb3aa5fd7e78d25499f78"
  },
  {
    "url": "assets/js/app.8ef6be69.js",
    "revision": "4c1f812152d542580cac7fd0c6c5811c"
  },
  {
    "url": "blog/index.html",
    "revision": "681395aeb3917ff4ba3c39cc05582f6f"
  },
  {
    "url": "blog/使用 VuePress 搭建个人博客.html",
    "revision": "62540f6a2427c6816de51e27c7f696bb"
  },
  {
    "url": "index.html",
    "revision": "8349eb773cc7ab551f2a06fc4b9d8c9b"
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
