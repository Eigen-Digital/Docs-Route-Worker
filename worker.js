export default {
  async fetch(request) {
    const url = new URL(request.url);

    return new Response(
      `Docs router is working.\nPath: ${url.pathname}`,
      {
        status: 200,
        headers: {
          "content-type": "text/plain",
        },
      }
    );
  },
};
