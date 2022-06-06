const timestamp = {
  toString: () => {
    throw new Error("`timestamp` has been removed from $service-worker. Use `version` instead");
  }
};
const build = [
  "/_app/immutable/start-d3a7c558.js",
  "/_app/immutable/pages/__layout.svelte-8139a8b6.js",
  "/_app/immutable/assets/pages/__layout.svelte-1537a61b.css",
  "/_app/immutable/assets/titillium-web-latin-ext-400-normal-05e41516.woff2",
  "/_app/immutable/assets/titillium-web-all-400-normal-36ceefe1.woff",
  "/_app/immutable/assets/titillium-web-latin-400-normal-557f6d08.woff2",
  "/_app/immutable/assets/titillium-web-latin-ext-700-normal-8f8ebc7e.woff2",
  "/_app/immutable/assets/titillium-web-all-700-normal-65d21c1b.woff",
  "/_app/immutable/assets/titillium-web-latin-700-normal-d5c1172f.woff2",
  "/_app/immutable/error.svelte-bd714bac.js",
  "/_app/immutable/pages/index.svelte-acc0ed3d.js",
  "/_app/immutable/assets/pages/index.svelte-3552b8ca.css",
  "/_app/immutable/chunks/index-9df6a460.js",
  "/_app/immutable/chunks/index-8a4b4e58.js",
  "/_app/immutable/chunks/paths-396f020f.js",
  "/_app/immutable/chunks/index-bd3f2e60.js"
];
const files = [
  "/.nojekyll",
  "/CNAME",
  "/favicon.png",
  "/logo-120x120.png",
  "/logo-128x128.png",
  "/logo-144x144.png",
  "/logo-152x152.png",
  "/logo-180x180.png",
  "/logo-192x192.png",
  "/logo-384x384.png",
  "/logo-512x512.png",
  "/logo-72x72.png",
  "/logo-96x96.png",
  "/logos/atlanta-fletiamo.avif",
  "/logos/atlanta-fletiamo.png",
  "/logos/atlanta-fletiamo.webp",
  "/logos/bellektro-ghetto.avif",
  "/logos/bellektro-ghetto.png",
  "/logos/bellektro-ghetto.webp",
  "/logos/freddyursa.avif",
  "/logos/freddyursa.jpg",
  "/logos/freddyursa.png",
  "/logos/freddyursa.webp",
  "/logos/gda.avif",
  "/logos/gda.jpg",
  "/logos/gda.png",
  "/logos/gda.webp",
  "/logos/kopflos-dorsten.avif",
  "/logos/kopflos-dorsten.png",
  "/logos/kopflos-dorsten.webp",
  "/logos/miami-heatran.avif",
  "/logos/miami-heatran.png",
  "/logos/miami-heatran.webp",
  "/logos/oliberlo-chancentod.avif",
  "/logos/oliberlo-chancentod.png",
  "/logos/oliberlo-chancentod.webp",
  "/logos/pixelspark.avif",
  "/logos/pixelspark.jpg",
  "/logos/pixelspark.png",
  "/logos/pixelspark.webp",
  "/logos/psv-nilsoking.avif",
  "/logos/psv-nilsoking.png",
  "/logos/psv-nilsoking.webp",
  "/logos/quellbrunn-quaxo-transparent.avif",
  "/logos/quellbrunn-quaxo-transparent.png",
  "/logos/quellbrunn-quaxo-transparent.webp",
  "/logos/quellbrunn-quaxo.avif",
  "/logos/quellbrunn-quaxo.jpg",
  "/logos/quellbrunn-quaxo.png",
  "/logos/quellbrunn-quaxo.webp",
  "/logos/surging-strikes.avif",
  "/logos/surging-strikes.png",
  "/logos/surging-strikes.webp",
  "/logos/tuspo-salamence.avif",
  "/logos/tuspo-salamence.png",
  "/logos/tuspo-salamence.webp",
  "/manifest.json",
  "/pokeball-logo.svg",
  "/till.png"
];
const worker = self;
const FILES = `cache${timestamp}`;
const to_cache = build.concat(files.filter((it) => !it.endsWith(".nojekyll")));
const staticAssets = new Set(to_cache);
worker.addEventListener("install", (event) => {
  event.waitUntil(caches.open(FILES).then((cache) => cache.addAll(to_cache)).then(() => {
    worker.skipWaiting();
  }));
});
worker.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then(async (keys) => {
    for (const key of keys) {
      if (key !== FILES)
        await caches.delete(key);
    }
    worker.clients.claim();
  }));
});
async function fetchAndCache(request) {
  const cache = await caches.open(`offline${timestamp}`);
  try {
    const response = await fetch(request);
    cache.put(request, response.clone());
    return response;
  } catch (err) {
    const response = await cache.match(request);
    if (response)
      return response;
    throw err;
  }
}
worker.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET" || event.request.headers.has("range"))
    return;
  const url = new URL(event.request.url);
  const isHttp = url.protocol.startsWith("http");
  const isDevServerRequest = url.hostname === self.location.hostname && url.port !== self.location.port;
  const isStaticAsset = url.host === self.location.host && staticAssets.has(url.pathname);
  const skipBecauseUncached = event.request.cache === "only-if-cached" && !isStaticAsset;
  if (isHttp && !isDevServerRequest && !skipBecauseUncached) {
    event.respondWith((async () => {
      const cachedAsset = (isStaticAsset || url.pathname.startsWith("/PokeAPI/sprites/")) && await caches.match(event.request);
      return cachedAsset || fetchAndCache(event.request);
    })());
  }
});