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
    "revision": "943953811bcadce98e0cf07d4b4cd3e4"
  },
  {
    "url": "512.png",
    "revision": "6a851b845d82108acff7cfe119efcf97"
  },
  {
    "url": "assets/css/0.styles.faeb6631.css",
    "revision": "123b21118973d3fe0f134c2e787d99cf"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.1f2e387f.js",
    "revision": "51bcf4d4de6e77e3a2d3cc4e1834914c"
  },
  {
    "url": "assets/js/11.339db49f.js",
    "revision": "ba92dc39b8e054f213e15c0bfbd04015"
  },
  {
    "url": "assets/js/12.a8e04166.js",
    "revision": "a928ec25cd70a71e550c5f9e31ada0b0"
  },
  {
    "url": "assets/js/13.6b7f6c7b.js",
    "revision": "301474e3b2f171a0c681c3a35d59c5da"
  },
  {
    "url": "assets/js/14.da403a23.js",
    "revision": "faf3ce51708e239e421256ee98ab9a63"
  },
  {
    "url": "assets/js/15.9a4f1697.js",
    "revision": "67136f66881c89927d1098fb38f264ff"
  },
  {
    "url": "assets/js/16.e572b42b.js",
    "revision": "936c3c7a58764560809771c7f5dc2afa"
  },
  {
    "url": "assets/js/17.9c247081.js",
    "revision": "70d0cf4a485ff69a5dc60972ad311470"
  },
  {
    "url": "assets/js/18.4035fee7.js",
    "revision": "c90e0a045a3a7a0115e28d6170046ceb"
  },
  {
    "url": "assets/js/19.3c32aa1c.js",
    "revision": "431e96ddeca88eeb39b8d8932ca18b25"
  },
  {
    "url": "assets/js/2.c3848be1.js",
    "revision": "5ce746c758ce269e75c245efef60c60a"
  },
  {
    "url": "assets/js/20.831a2f73.js",
    "revision": "4a426ecf0ae33e1db5b7fb2c07d89019"
  },
  {
    "url": "assets/js/21.0131d159.js",
    "revision": "bfebf7dd2bc94671a0c8c2b4698f0724"
  },
  {
    "url": "assets/js/3.64ccb596.js",
    "revision": "20b6f1ca864993f003f2284df14f6fc1"
  },
  {
    "url": "assets/js/4.76e0b0a9.js",
    "revision": "db7b4064976b1e6cb681d408b87edbb5"
  },
  {
    "url": "assets/js/5.0e8bb94d.js",
    "revision": "c398bc9fc9f9cc30ac4bab61f6888338"
  },
  {
    "url": "assets/js/6.41a8c27c.js",
    "revision": "c9246d35a0d58016508fa2fcc87a374f"
  },
  {
    "url": "assets/js/7.51a66021.js",
    "revision": "867071056e1e9fcc358b252f544bfb61"
  },
  {
    "url": "assets/js/8.a59ce9b8.js",
    "revision": "df967b28c01aaaa12cd29aafa4cda929"
  },
  {
    "url": "assets/js/9.0333a404.js",
    "revision": "977b118d4f63e83773db1c3d56e7d2ab"
  },
  {
    "url": "assets/js/app.44a06aa1.js",
    "revision": "3c6a97da380310a7f6961b8dda9be051"
  },
  {
    "url": "hobby/index.html",
    "revision": "ed80650c9aebf22f6f75d2ee86f35231"
  },
  {
    "url": "index.html",
    "revision": "548a37c6d4e4e87b59f57d227b497550"
  },
  {
    "url": "major/index.html",
    "revision": "e296d3bed59f9c8ecb0797ec2744355b"
  },
  {
    "url": "major/others/index.html",
    "revision": "f89ad04ee3eaed4f60243fbad807fb80"
  },
  {
    "url": "major/others/使用 VuePress 搭建个人博客.html",
    "revision": "7d73300ffa905bb5dd574ef76547c62a"
  },
  {
    "url": "major/others/计算机三级网络技术考过指南.html",
    "revision": "0a688ec368c5c83363abfdc0d90953ae"
  },
  {
    "url": "major/react/index.html",
    "revision": "a70bcf64a2e39fbcdbee9f7469cd00e4"
  },
  {
    "url": "major/react/超全面详细一条龙教程！从零搭建 React 项目全家桶（上篇）.html",
    "revision": "08bb194cf85d4c430d649ee9994da19b"
  },
  {
    "url": "major/react/超全面详细一条龙教程！从零搭建 React 项目全家桶（下篇）.html",
    "revision": "420ce9ec4c551326b653adeb29f3a872"
  },
  {
    "url": "major/vue/index.html",
    "revision": "2089d1e773c696849453ad30eb612ebb"
  },
  {
    "url": "major/vue/使用 VuePress 搭建个人博客.html",
    "revision": "16d7fad9e71c0d8f9416141aa118a627"
  },
  {
    "url": "video/index.html",
    "revision": "9ba205b6b14cacd2ca799eba00cd018d"
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
