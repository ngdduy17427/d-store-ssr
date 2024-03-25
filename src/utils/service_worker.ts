const fetchEvent = () => {
  const cacheName = "v1";
  const cacheClone = async (event: any) => {
    const res = await fetch(event.request);
    const resClone = res.clone();

    const cache = await caches.open(cacheName);
    await cache.put(event.request, resClone);
    return res;
  };
  self.addEventListener("fetch", (event: any) => {
    event.respondWith(
      cacheClone(event)
        .catch(() => caches.match(event.request))
        .then((res) => res)
    );
  });
};
fetchEvent();
