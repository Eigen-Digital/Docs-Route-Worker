export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname.startsWith('/sheetx/')) {
      const path = url.pathname.slice(8);
      return fetch(new Request(`https://sheetx.pages.dev/${path}`, request));
    }

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
