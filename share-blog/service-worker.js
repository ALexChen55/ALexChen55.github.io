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
    "revision": "c2fac0574d5c8980e64a9563a1ca0ee0"
  },
  {
    "url": "512.png",
    "revision": "6a851b845d82108acff7cfe119efcf97"
  },
  {
    "url": "assets/css/0.styles.7d359c0c.css",
    "revision": "f484f7aa8f2baea93e4de16dfcf1b65c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7268d9d4.js",
    "revision": "7b1e60b76fbd30510034d274f14a01b9"
  },
  {
    "url": "assets/js/11.3800256b.js",
    "revision": "e69c84e64b3910f9d706ebf3111a7070"
  },
  {
    "url": "assets/js/2.ed449c4e.js",
    "revision": "af93a50d96a9a9b8b5a7363491bb7eeb"
  },
  {
    "url": "assets/js/3.e2e3c932.js",
    "revision": "643dfa9fa82bf79b5e184657428a7160"
  },
  {
    "url": "assets/js/4.bde6d292.js",
    "revision": "c958ed80d6a5ef753afa0905aee3b59d"
  },
  {
    "url": "assets/js/5.5de58e9f.js",
    "revision": "35716bd7be92c6ae52b45b16e615fd36"
  },
  {
    "url": "assets/js/6.fa582414.js",
    "revision": "8103e04fca77c66d9cdc2d8db04f62bb"
  },
  {
    "url": "assets/js/7.d72a233f.js",
    "revision": "c52c15845f7f229ff166f2f71a06db8f"
  },
  {
    "url": "assets/js/8.521d24cb.js",
    "revision": "56e1e8d030292336dd9e2fce2d2a8688"
  },
  {
    "url": "assets/js/9.455ff84d.js",
    "revision": "84b8145d8da289ddc5b8bf3c5557221f"
  },
  {
    "url": "assets/js/app.42a3e073.js",
    "revision": "210f3e114fb8e86f702ed3edf1e5eba2"
  },
  {
    "url": "blog/index.html",
    "revision": "20da74a7dd59efd0843394d12855f197"
  },
  {
    "url": "blog/使用 VuePress 搭建个人博客.html",
    "revision": "5cb363a3b5541e6bdb0e83124d46a25f"
  },
  {
    "url": "index.html",
    "revision": "93289d70df76af22a49813feef4b5479"
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
