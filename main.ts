addEventListener("fetch", (event) => {
  event.respondWith(
    new Response("Hello! I am Dmitriy from https://dmitriy.tatar", {
      status: 200,
      headers: { "content-type": "text/plain" },
    }),
  );
});
