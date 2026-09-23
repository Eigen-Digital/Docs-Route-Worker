export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname.startsWith('/sheetx/')) {
      return fetch(new Request('https://sheetx.pages.dev/', request));
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
