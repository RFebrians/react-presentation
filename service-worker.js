"use strict";var precacheConfig=[["/RFebrians/react-presentation/index.html","df28f807e32b34e8f9fef1b4c05391a2"],["/RFebrians/react-presentation/static/css/main.ec3d29e4.css","5897545d2079c8efcaa336bc166635de"],["/RFebrians/react-presentation/static/js/main.b076b448.js","f22ce882bd308b927459a33e455b7c6d"],["/RFebrians/react-presentation/static/media/eightthimg.74edf7aa.png","74edf7aa8e893d7ce721d769720df012"],["/RFebrians/react-presentation/static/media/eleventhimg.74edf7aa.png","74edf7aa8e893d7ce721d769720df012"],["/RFebrians/react-presentation/static/media/fifteenthimg.74edf7aa.png","74edf7aa8e893d7ce721d769720df012"],["/RFebrians/react-presentation/static/media/fifthimg.74edf7aa.png","74edf7aa8e893d7ce721d769720df012"],["/RFebrians/react-presentation/static/media/firstimg.74edf7aa.png","74edf7aa8e893d7ce721d769720df012"],["/RFebrians/react-presentation/static/media/fourteenthimg.74edf7aa.png","74edf7aa8e893d7ce721d769720df012"],["/RFebrians/react-presentation/static/media/fourthimg.74edf7aa.png","74edf7aa8e893d7ce721d769720df012"],["/RFebrians/react-presentation/static/media/giphy.2617e0cd.gif","2617e0cd55c0d25bc020621f4480917c"],["/RFebrians/react-presentation/static/media/ninthimg.74edf7aa.png","74edf7aa8e893d7ce721d769720df012"],["/RFebrians/react-presentation/static/media/secondimg.74edf7aa.png","74edf7aa8e893d7ce721d769720df012"],["/RFebrians/react-presentation/static/media/seventhimg.74edf7aa.png","74edf7aa8e893d7ce721d769720df012"],["/RFebrians/react-presentation/static/media/sixthimg.74edf7aa.png","74edf7aa8e893d7ce721d769720df012"],["/RFebrians/react-presentation/static/media/tenthimg.74edf7aa.png","74edf7aa8e893d7ce721d769720df012"],["/RFebrians/react-presentation/static/media/thirdimg.74edf7aa.png","74edf7aa8e893d7ce721d769720df012"],["/RFebrians/react-presentation/static/media/thirteenthimg.74edf7aa.png","74edf7aa8e893d7ce721d769720df012"],["/RFebrians/react-presentation/static/media/twelvethimg.74edf7aa.png","74edf7aa8e893d7ce721d769720df012"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){e=new URL(e);return"/"===e.pathname.slice(-1)&&(e.pathname+=t),e.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){e=new URL(e);return n&&e.pathname.match(n)||(e.search+=(e.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),e.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){e=new URL(e);return e.hash="",e.search=e.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],e=e[1],t=new URL(t,self.location),e=createCacheKey(t,hashParamName,e,/\.\w{8}\./);return[t.toString(),e]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){var a,e,n;"GET"===t.request.method&&(a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html",(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a)),n="/RFebrians/react-presentation/index.html",!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)})))});