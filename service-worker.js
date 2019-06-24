/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["2018/09/08/2018-9-8-reading/index.html","6b2bc66233fbf11e117f05ad8d4a56c7"],["2018/11/06/2018-11-06-biz/index.html","c4215a8b21d3c6a7625f8d5591b30d0a"],["archives/2018/09/index.html","21ca670e1a4efd1702962db30cd6c2ac"],["archives/2018/11/index.html","31eeb8072dbac9db01d9d50304572e57"],["archives/2018/index.html","86d943b899c7d052a4021c5c6f9dc30a"],["archives/index.html","8fd97c6927ab31d479d0542c7d347d3f"],["css/images/avatar.png","8c257f9fdc3c92ebd07e84f3eb181297"],["css/images/logo.png","b770d93c20b516bf7d98e1e2b50f93e8"],["css/images/thumb-default-small.png","0d3d38c94b750b66de049f80a7772ea7"],["css/style.css","4c45d6dcbf1f28c4a869f3566dd50fef"],["index.html","8fac22fade881ce12baf032bbcaee1b2"],["js/insight.js","d4ec5296d86650767747b51a03976cda"],["js/main.js","2e3e7e203d4785b5fe44b56b815def16"],["libs/font-awesome5/css/fa-brands.css","ef4b96231c1c8e5bc6d2018ff59ee62e"],["libs/font-awesome5/css/fa-brands.min.css","e7771f7bdea7a420973e20cd173a1b19"],["libs/font-awesome5/css/fa-solid.css","f59b676f5ab1dca6ba71e7eba50cd004"],["libs/font-awesome5/css/fa-solid.min.css","286b42d8d5ab6254c10c8cfbc00ce955"],["libs/font-awesome5/css/fontawesome.css","695883f214d9afb980d1fdc2fca6ee1a"],["libs/font-awesome5/css/fontawesome.min.css","497c6efa3acaba85fb0a1b4f76b61bde"],["libs/font-awesome5/webfonts/fa-brands-400.eot","748ab466bee11e0b2132916def799916"],["libs/font-awesome5/webfonts/fa-brands-400.svg","b032e14eac87e3001396ff597e4ec15f"],["libs/font-awesome5/webfonts/fa-brands-400.ttf","7febe26eeb4dd8e3a3c614a144d399fb"],["libs/font-awesome5/webfonts/fa-brands-400.woff","2248542e1bbbd548a157e3e6ced054fc"],["libs/font-awesome5/webfonts/fa-solid-900.eot","035a137af03db6f1af76a589da5bb865"],["libs/font-awesome5/webfonts/fa-solid-900.svg","9bbbee00f65769a64927764ef51af6d0"],["libs/font-awesome5/webfonts/fa-solid-900.ttf","b6a14bb88dbc580e45034af297c8f605"],["libs/font-awesome5/webfonts/fa-solid-900.woff","6661d6b3521b4c480ba759e4b9e480c1"],["libs/jquery/2.1.3/jquery.min.js","32015dd42e9582a80a84736f5d9a44d7"],["libs/justified-gallery/jquery.justifiedGallery.min.js","7b8f9e0d4b845e90381ae044b8b5e657"],["libs/justified-gallery/justifiedGallery.min.css","9a5e8949e0c84f864668f0205c5fafbd"],["libs/lightgallery/css/lg-fb-comment-box.css","2ab4129c7b8cd8f3d4d0ce62e66904d6"],["libs/lightgallery/css/lg-fb-comment-box.min.css","f216c9f755ca3131d5d8abff3eee5193"],["libs/lightgallery/css/lg-transitions.css","c7c90f6be9108b17e459ef992e7e889b"],["libs/lightgallery/css/lg-transitions.min.css","a3330c0ba52c1c1f912fa21966ba7079"],["libs/lightgallery/css/lightgallery.css","fd0ae83fc66fd7b96d2066b94805a39e"],["libs/lightgallery/css/lightgallery.min.css","2a128ed1be3f9be67ef99d92f95845fc"],["libs/lightgallery/fonts/lg.eot","ecff11700aad0000cf3503f537d1df17"],["libs/lightgallery/fonts/lg.svg","98d62b1e5f5b556facf319b19c6c7cba"],["libs/lightgallery/fonts/lg.ttf","4fe6f9caff8b287170d51d3d71d5e5c6"],["libs/lightgallery/fonts/lg.woff","5fd4c338c1a1b1eeeb2c7b0a0967773d"],["libs/lightgallery/img/loading.gif","0aeca8b09888accfccf11976b34c4e64"],["libs/lightgallery/img/video-play.png","4f03bd8dec67211ade8abdab39dcbf4a"],["libs/lightgallery/img/vimeo-play.png","699d005153517ee4264615dd1e4e2b64"],["libs/lightgallery/img/youtube-play.png","96bc9d7e27d077372cc0bc9524c500e6"],["libs/lightgallery/js/lg-autoplay.js","eead116e849544337f98e1f909984da6"],["libs/lightgallery/js/lg-autoplay.min.js","9cc557cce697d947b82db9c63bec1f56"],["libs/lightgallery/js/lg-fullscreen.js","4f138d53ae7b5f8ebec5917daebe1892"],["libs/lightgallery/js/lg-fullscreen.min.js","ad666d733183e14359ad2dc3b17ed161"],["libs/lightgallery/js/lg-hash.js","4de75c991f347a3501fdb2fe0833b1cf"],["libs/lightgallery/js/lg-hash.min.js","17182adfcf75dccb64391343c90586ad"],["libs/lightgallery/js/lg-pager.js","2ddc77bc71fdd588e05ee3f27b6e187b"],["libs/lightgallery/js/lg-pager.min.js","79ae9590a49eece30be5a7318d2836c6"],["libs/lightgallery/js/lg-share.js","40bb22981ba549bf9086118147608b4e"],["libs/lightgallery/js/lg-share.min.js","f38dda2f772f0cc5a143e40e0cb96eae"],["libs/lightgallery/js/lg-thumbnail.js","02e7bfe2e732f524cd3dd6f78dec110b"],["libs/lightgallery/js/lg-thumbnail.min.js","16d7b8599fddeb7af22cf00684ab2b25"],["libs/lightgallery/js/lg-video.js","4e1459c4a990ca4f9fe58f385762b31a"],["libs/lightgallery/js/lg-video.min.js","974a23bceeaada9b60c467129acfc422"],["libs/lightgallery/js/lg-zoom.js","284a3d8af84caf362eea54eefe89b145"],["libs/lightgallery/js/lg-zoom.min.js","280784d5d0c1cd5f74c758eb44217149"],["libs/lightgallery/js/lightgallery.js","22c34dbc5304139b95331d24c547c5fa"],["libs/lightgallery/js/lightgallery.min.js","d8362d715c324c128556fd285143e0af"],["libs/open-sans/styles.css","663afa138d47e4cef4455370cf00ee66"],["libs/source-code-pro/styles.css","fd6b67f05e7415482cf4e038fd39efed"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







