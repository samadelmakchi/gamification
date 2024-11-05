const CACHE_NAME = "gamification_app_002";
const OFFLINE_URL = "index.html";

//------------------------------------------------------------------------------------

self.addEventListener("install", event => {
	self.skipWaiting();
	event.waitUntil(
		caches.open(CACHE_NAME).then(cache => {
			cache.add(new Request(OFFLINE_URL, { cache: "reload" }));
			cache.add(new Request("index.html"));
			cache.add(new Request("manifest-gamification.json"));
			cache.add(new Request("sw-gamification.js"));
			cache.add(new Request("sitemap.xml"));
			cache.add(new Request("robots.txt"));
			cache.add(new Request("favicon_config.json"));
			cache.add(new Request(".htaccess"));

			cache.add(new Request("gamification.png"));

			cache.add(new Request("gamification/octalysis.jpg"));
            cache.add(new Request("gamification/pg_1_1.jpg"));
            cache.add(new Request("gamification/pg_10_1.jpg"));
            cache.add(new Request("gamification/pg_11_1.jpg"));
            cache.add(new Request("gamification/pg_12_1.jpg"));
            cache.add(new Request("gamification/pg_13_1.jpg"));
            cache.add(new Request("gamification/pg_14_1.jpg"));
            cache.add(new Request("gamification/pg_15_1.jpg"));
            cache.add(new Request("gamification/pg_16_1.jpg"));
            cache.add(new Request("gamification/pg_17_1.jpg"));
            cache.add(new Request("gamification/pg_18_1.jpg"));
            cache.add(new Request("gamification/pg_18_2.jpg"));
            cache.add(new Request("gamification/pg_19_1.jpg"));
            cache.add(new Request("gamification/pg_19_2.jpg"));
            cache.add(new Request("gamification/pg_21_1.jpg"));
            cache.add(new Request("gamification/pg_21_2.jpg"));
            cache.add(new Request("gamification/pg_21_3.jpg"));
            cache.add(new Request("gamification/pg_21_4.jpg"));
            cache.add(new Request("gamification/pg_21_5.jpg"));
            cache.add(new Request("gamification/pg_22_1.jpg"));
            cache.add(new Request("gamification/pg_23_1.jpg"));
            cache.add(new Request("gamification/pg_23_2.jpg"));
            cache.add(new Request("gamification/pg_24_1.jpg"));
            cache.add(new Request("gamification/pg_24_2.jpg"));
            cache.add(new Request("gamification/pg_27_1.jpg"));
            cache.add(new Request("gamification/pg_27_2.jpg"));
            cache.add(new Request("gamification/pg_27_3.jpg"));
            cache.add(new Request("gamification/pg_25_1.jpg"));
            cache.add(new Request("gamification/pg_25_2.jpg"));
            cache.add(new Request("gamification/pg_25_3.jpg"));
            cache.add(new Request("gamification/pg_25_4.jpg"));
            cache.add(new Request("gamification/pg_28_1.jpg"));
            cache.add(new Request("gamification/pg_28_2.jpg"));
            cache.add(new Request("gamification/pg_28_3.jpg"));
            cache.add(new Request("gamification/pg_28_4.jpg"));
            cache.add(new Request("gamification/pg_29_1.jpg"));
            cache.add(new Request("gamification/pg_30_1.jpg"));
            cache.add(new Request("gamification/pg_30_2.jpg"));
            cache.add(new Request("gamification/pg_32_1.jpg"));
            cache.add(new Request("gamification/pg_33_1.jpg"));
            cache.add(new Request("gamification/pg_34_1.jpg"));

            cache.add(new Request("footer-bg.png"));
            cache.add(new Request("hero-bg.png"));
            cache.add(new Request("check-box.png"));

			cache.add(new Request("assets/vendor/bootstrap/css/bootstrap.min.css"));
			cache.add(new Request("assets/vendor/bootstrap-icons/bootstrap-icons.css"));
			cache.add(new Request("assets/vendor/remixicon/remixicon.css"));
			cache.add(new Request("assets/css/style.css"));
			cache.add(new Request("assets/css/custom.css"));
			cache.add(new Request("assets/vendor/bootstrap/js/bootstrap.bundle.min.js"));
			cache.add(new Request("assets/vendor/jquery-3.6.3.min.js"));
			cache.add(new Request("assets/vendor/isotope-layout/isotope.pkgd.min.js"));
			cache.add(new Request("assets/vendor/iconify/iconify.min.js"));
			cache.add(new Request("assets/js/main.js"));

			cache.add(new Request("assets/fonts/iran_sans_web_black.eot"));
			cache.add(new Request("assets/fonts/iran_sans_web_black.eot"));
			cache.add(new Request("assets/fonts/iran_sans_web_black.woff2"));
			cache.add(new Request("assets/fonts/iran_sans_web_black.woff"));
			cache.add(new Request("assets/fonts/iran_sans_web_black.ttf"));
			cache.add(new Request("assets/fonts/iran_sans_web_black.svg"));
			cache.add(new Request("assets/fonts/iran_sans_web_bold.eot"));
			cache.add(new Request("assets/fonts/iran_sans_web_bold.eot"));
			cache.add(new Request("assets/fonts/iran_sans_web_bold.woff2"));
			cache.add(new Request("assets/fonts/iran_sans_web_bold.woff"));
			cache.add(new Request("assets/fonts/iran_sans_web_bold.ttf"));
			cache.add(new Request("assets/fonts/iran_sans_web_bold.svg"));
			cache.add(new Request("assets/fonts/iran_sans_web_medium.eot"));
			cache.add(new Request("assets/fonts/iran_sans_web_medium.eot"));
			cache.add(new Request("assets/fonts/iran_sans_web_medium.woff2"));
			cache.add(new Request("assets/fonts/iran_sans_web_medium.woff"));
			cache.add(new Request("assets/fonts/iran_sans_web_medium.ttf"));
			cache.add(new Request("assets/fonts/iran_sans_web_medium.svg"));
			cache.add(new Request("assets/fonts/iran_sans_web_light.eot"));
			cache.add(new Request("assets/fonts/iran_sans_web_light.eot"));
			cache.add(new Request("assets/fonts/iran_sans_web_light.woff2"));
			cache.add(new Request("assets/fonts/iran_sans_web_light.woff"));
			cache.add(new Request("assets/fonts/iran_sans_web_light.ttf"));
			cache.add(new Request("assets/fonts/iran_sans_web_light.svg"));
			cache.add(new Request("assets/fonts/iran_sans_web_ultra_light.eot"));
			cache.add(new Request("assets/fonts/iran_sans_web_ultra_light.eot"));
			cache.add(new Request("assets/fonts/iran_sans_web_ultra_light.woff2"));
			cache.add(new Request("assets/fonts/iran_sans_web_ultra_light.woff"));
			cache.add(new Request("assets/fonts/iran_sans_web_ultra_light.ttf"));
			cache.add(new Request("assets/fonts/iran_sans_web_ultra_light.svg"));
			cache.add(new Request("assets/fonts/iran_sans_web.eot"));
			cache.add(new Request("assets/fonts/iran_sans_web.eot"));
			cache.add(new Request("assets/fonts/iran_sans_web.woff2"));
			cache.add(new Request("assets/fonts/iran_sans_web.woff"));
			cache.add(new Request("assets/fonts/iran_sans_web.ttf"));
			cache.add(new Request("assets/fonts/iran_sans_web.svg"));
			cache.add(new Request("assets/fonts/work_sans.eot"));
			cache.add(new Request("assets/fonts/work_sans.eot"));
			cache.add(new Request("assets/fonts/work_sans.woff2"));
			cache.add(new Request("assets/fonts/work_sans.woff"));
			cache.add(new Request("assets/fonts/work_sans.ttf"));
			cache.add(new Request("assets/fonts/work_sans.svg"));

			cache.add(new Request("logo/logo.png"));
			cache.add(new Request("logo/preview.jpg"));
			cache.add(new Request("logo/favicon.ico"));
			cache.add(new Request("logo/favicon-16x16.png"));
			cache.add(new Request("logo/favicon-32x32.png"));
			cache.add(new Request("logo/favicon-96x96.png"));
			cache.add(new Request("logo/safari-pinned-tab.svg"));
			cache.add(new Request("logo/apple-touch-icon-20x20.png"));
			cache.add(new Request("logo/apple-touch-icon-29x29.png"));
			cache.add(new Request("logo/apple-touch-icon-40x40.png"));
			cache.add(new Request("logo/apple-touch-icon-48x48.png"));
			cache.add(new Request("logo/apple-touch-icon-50x50.png"));
			cache.add(new Request("logo/apple-touch-icon-57x57.png"));
			cache.add(new Request("logo/apple-touch-icon-58x58.png"));
			cache.add(new Request("logo/apple-touch-icon-60x60.png"));
			cache.add(new Request("logo/apple-touch-icon-72x72.png"));
			cache.add(new Request("logo/apple-touch-icon-76x76.png"));
			cache.add(new Request("logo/apple-touch-icon-80x80.png"));
			cache.add(new Request("logo/apple-touch-icon-87x87.png"));
			cache.add(new Request("logo/apple-touch-icon-96x96.png"));
			cache.add(new Request("logo/apple-touch-icon-100x100.png"));
			cache.add(new Request("logo/apple-touch-icon-114x114.png"));
			cache.add(new Request("logo/apple-touch-icon-120x120.png"));
			cache.add(new Request("logo/apple-touch-icon-128x128.png"));
			cache.add(new Request("logo/apple-touch-icon-144x144.png"));
			cache.add(new Request("logo/apple-touch-icon-152x152.png"));
			cache.add(new Request("logo/apple-touch-icon-167x167.png"));
			cache.add(new Request("logo/apple-touch-icon-168x168.png"));
			cache.add(new Request("logo/apple-touch-icon-180x180.png"));
			cache.add(new Request("logo/apple-touch-icon-192x192.png"));
			cache.add(new Request("logo/apple-touch-icon-256x256.png"));
			cache.add(new Request("logo/apple-touch-icon-512x512.png"));
			cache.add(new Request("logo/apple-touch-startup-image-320x460.png"));
			cache.add(new Request("logo/apple-touch-startup-image-640x920.png"));
			cache.add(new Request("logo/apple-touch-startup-image-640x1096.png"));
			cache.add(new Request("logo/apple-touch-startup-image-768x1004.png"));
			cache.add(new Request("logo/apple-touch-startup-image-748x1024.png"));
			cache.add(new Request("logo/apple-touch-startup-image-1536x2008.png"));
			cache.add(new Request("logo/apple-touch-startup-image-1496x2048.png"));
			cache.add(new Request("logo/mstile-144x144.png"));
			cache.add(new Request("logo/mstile-70x70.png"));
			cache.add(new Request("logo/mstile-150x150.png"));
			cache.add(new Request("logo/mstile-310x150.png"));
			cache.add(new Request("logo/mstile-310x310.png"));
			cache.add(new Request("logo/browserconfig.xml"));
			cache.add(new Request("logo/android-chrome-16x16.png"));
			cache.add(new Request("logo/android-chrome-32x32.png"));
			cache.add(new Request("logo/android-chrome-36x36.png"));
			cache.add(new Request("logo/android-chrome-48x48.png"));
			cache.add(new Request("logo/android-chrome-64x64.png"));
			cache.add(new Request("logo/android-chrome-72x72.png"));
			cache.add(new Request("logo/android-chrome-96x96.png"));
			cache.add(new Request("logo/android-chrome-144x144.png"));
			cache.add(new Request("logo/android-chrome-192x192.png"));
			cache.add(new Request("logo/android-chrome-256x256.png"));
			cache.add(new Request("logo/android-chrome-384x384.png"));
			cache.add(new Request("logo/android-chrome-512x512.png"));
		})
	);
});

//------------------------------------------------------------------------------------

self.addEventListener("activate", (event) => {
	event.waitUntil(
		(async () => {
			if ("navigationPreload" in self.registration) {
				await self.registration.navigationPreload.enable();
			}
		})()
	);
	self.clients.claim();

	event.waitUntil(
		caches.keys().then(keys => {
			Promise.all(
				keys.map(key => {
					if (![CACHE_NAME].includes(key)) {
						return caches.delete(key);
					}
				})
			)
		})
	);
});

//------------------------------------------------------------------------------------

self.addEventListener("fetch", (event) => {
	if (event.request.mode === "navigate") {
		event.respondWith(
			(async () => {
				try {
					const preloadResponse = await event.preloadResponse;
					if (preloadResponse) {
						return preloadResponse;
					}
					const networkResponse = await fetch(event.request);
					return networkResponse;
				} catch (error) {
					const cache = await caches.open(CACHE_NAME);
					const cachedResponse = await cache.match(OFFLINE_URL);
					return cachedResponse;
				}
			})()
		);
	}
});

//------------------------------------------------------------------------------------