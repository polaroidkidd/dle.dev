import type { Handle } from '@sveltejs/kit';

const HTML_CACHE_CONTROL = 'private, no-cache, max-age=0, must-revalidate';

export const handle: Handle = async ({ resolve, event }) => {
  const response = await resolve(event);
  const contentType = response.headers.get('content-type');

  if (!contentType?.startsWith('text/html')) {
    return response;
  }

  const htmlResponse = new Response(response.body, response);
  htmlResponse.headers.set('cache-control', HTML_CACHE_CONTROL);

  return htmlResponse;
};
