const VERSION 		 = 1;
let CACHE_PREFETCH = {
	catcher: 'prefetch-v' + VERSION
};

var staticFiles = [
	'./',
	'index.html',
	'js/penjumlahan.js',
	'https://fonts.googleapis.com/css?family=Overpass',
	'js/petasatu.js',
	'js/peta.js',
	'js/header.js',
	'js/header2.js',
	'js/footer.js',
	'css/basic.css',
	'css/grid.css',
	'css/peta.css',
	'img/icon.png',
	'img/icon-menu.png',
	'img/brand.png',
	'404.html',
	'index.html',
	'project/1/index.html',
	'project/1/latihancss.html',
	'project/2/index.html',
	'project/3/index.html',
	'manifest.json',
	'profile.html'
];

const OFF_URL = '404.html';

function reviewCacheRequest(url) {
	let request = new Request(url, {cache: 'reload',mode: 'no-cors'});
	if ('cache' in request) return request;
	let reviewed 	= new URL(url, self.location.href);
	reviewed.search += (reviewed.search ? '&' : '') + 'cachebust=' + Date.now();
	console.log('reviewed for self. '+reviewed.search);
	return new Request(reviewed);
}

self.addEventListener('install', function(evt) {

	evt.waitUntil(

		caches.open(CACHE_PREFETCH.catcher).then(function(cache) {
			var catching = staticFiles.map(function(fetchUrl) {

				fetch(reviewCacheRequest(fetchUrl)).then(function(response) {
					if (response.status < 400) {
			      	cache.put(fetchUrl, response.clone());
			      	return response;
				   }else{
				   	console.error('self reviewed. ' + fetchUrl + ' failed: ' + response.statusText);
				   }
			   }).catch(function(error) {
	         	console.error('Not caching ' + fetchUrl + ' - cause. ' + error);
	        	})

			})

			return Promise.all(catching).then(function() {
      		console.log('fetch install complete.');
      	});

		}).catch(function(error) {
      	console.error('fetching failed:', error);
    	})

	);

});

self.addEventListener('activate', function(evt) {

	let expectCache = Object.keys(CACHE_PREFETCH).map(function(key) {
    	return CACHE_PREFETCH[key];
  	});

  	evt.waitUntil(
   	caches.keys().then(function(cacheNames) {
      	return Promise.all(
        		cacheNames.map(function(cacheName) {
	          	if (expectCache.indexOf(cacheName) === -1) {
	            	console.log('Deleting cache:', cacheName);
	            	return caches.delete(cacheName);
	          	}
        		})
      	);
    	})
  	);

});

self.addEventListener('fetch', function(evt) {

	console.log('Handling fetch for. ', evt.request.url);
		evt.respondWith(

			caches.open(CACHE_PREFETCH.catcher).then(function(cache) {

				return caches.match(evt.request).then(function(response) {

					if (response) {
	        			console.log('Hit in caches:', response);
	        			return response;
	      		}

	      		console.log('Not found in caches. New try fetching: '+evt.request.url);

	      		return fetch(evt.request.clone()).then(function(response) {

			         if ( response.status < 400 ) {
			         	console.log('put in cache new entry. '+evt.request.url);
			            cache.put(evt.request, response.clone());
			            return response;
			         }

			      }).catch(function(error) {
	         		console.error('Return offline for. ' + evt.request.url + ' - cause: ' + error);
	         		return caches.match(OFF_URL);
	        		});

				})

			})

		);

	//}

});

