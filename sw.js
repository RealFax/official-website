if(!self.define){let s,n={};const e=(e,o)=>(e=new URL(e+".js",o).href,n[e]||new Promise((n=>{if("document"in self){const s=document.createElement("script");s.src=e,s.onload=n,document.head.appendChild(s)}else s=e,importScripts(e),n()})).then((()=>{let s=n[e];if(!s)throw new Error(`Module ${e} didn’t register its module`);return s})));self.define=(o,l)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(n[i])return;let r={};const a=s=>e(s,i),f={module:{uri:i},exports:r,require:a};n[i]=Promise.all(o.map((s=>f[s]||a(s)))).then((s=>(l(...s),r)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"404.html",revision:"7ac2a5f65ce52f7477e5b4ad04d9b432"},{url:"assets/Button-1tO7zRXQ.js",revision:null},{url:"assets/Home-nHY8e0Y7.js",revision:null},{url:"assets/index-mN23atzl.js",revision:null},{url:"assets/index-XBcmAs0f.css",revision:null},{url:"assets/NotFound-nbd94HSR.js",revision:null},{url:"assets/open-sans-cyrillic-400-normal-F5DFsU0o.woff2",revision:null},{url:"assets/open-sans-cyrillic-600-normal-Terlec-S.woff2",revision:null},{url:"assets/open-sans-cyrillic-800-normal-yKZR3z3J.woff2",revision:null},{url:"assets/open-sans-cyrillic-ext-400-normal-QzmHybyF.woff2",revision:null},{url:"assets/open-sans-cyrillic-ext-600-normal-43n0ZW22.woff2",revision:null},{url:"assets/open-sans-cyrillic-ext-800-normal-OGN3qK52.woff2",revision:null},{url:"assets/open-sans-greek-400-normal-as3zkDlU.woff2",revision:null},{url:"assets/open-sans-greek-600-normal-BK0gd-uf.woff2",revision:null},{url:"assets/open-sans-greek-800-normal-ZzTk0osk.woff2",revision:null},{url:"assets/open-sans-hebrew-400-normal-N2Ni5Zm4.woff2",revision:null},{url:"assets/open-sans-hebrew-600-normal-GxkOvvsk.woff2",revision:null},{url:"assets/open-sans-hebrew-800-normal-1YNltLWw.woff2",revision:null},{url:"assets/open-sans-latin-400-normal-_baMC0MH.woff2",revision:null},{url:"assets/open-sans-latin-600-normal-kBH6-N69.woff2",revision:null},{url:"assets/open-sans-latin-800-normal-6OPIEf11.woff2",revision:null},{url:"assets/open-sans-latin-ext-400-normal-JEN_W3v0.woff2",revision:null},{url:"assets/open-sans-latin-ext-600-normal-IyIZz5du.woff2",revision:null},{url:"assets/open-sans-latin-ext-800-normal-orCr6loV.woff2",revision:null},{url:"assets/open-sans-vietnamese-400-normal-YIMos6gN.woff2",revision:null},{url:"assets/open-sans-vietnamese-600-normal-ZoeHOFJw.woff2",revision:null},{url:"assets/open-sans-vietnamese-800-normal-r3-UqSBK.woff2",revision:null},{url:"icons/icon-128x128.png",revision:"48f34a40c64e5a8f365d80d5a0f3faf1"},{url:"icons/icon-192x192.png",revision:"14bce3d0877c61af379e9e1d31cf7b9b"},{url:"icons/icon-256x256.png",revision:"ff00ed666948c8fb98f1737cd01c60ab"},{url:"icons/icon-512x512.png",revision:"d6c22dac5784286f79abfded538c80a5"},{url:"icons/icon-64x64.png",revision:"5059e8e92b283d252633904ebd80ae38"},{url:"index.html",revision:"211a2d66aa56a3f62c8559886b49e347"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"icons/icon-64x64.png",revision:"5059e8e92b283d252633904ebd80ae38"},{url:"icons/icon-128x128.png",revision:"48f34a40c64e5a8f365d80d5a0f3faf1"},{url:"icons/icon-192x192.png",revision:"14bce3d0877c61af379e9e1d31cf7b9b"},{url:"icons/icon-256x256.png",revision:"ff00ed666948c8fb98f1737cd01c60ab"},{url:"icons/icon-512x512.png",revision:"d6c22dac5784286f79abfded538c80a5"},{url:"manifest.webmanifest",revision:"293a34a3a5cde839138ba2b9aaac4299"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));