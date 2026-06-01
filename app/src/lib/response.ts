export function jsonResponse(data: unknown, init: ResponseInit = {}): Response {
  const headers = new Headers(init.headers);
  if (!headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json; charset=utf-8');
  }

  return new Response(JSON.stringify(data, null, 2), {
    ...init,
    headers,
  });
}

export function textResponse(
  body: string,
  contentType = 'text/plain; charset=utf-8',
  init: ResponseInit = {}
): Response {
  const headers = new Headers(init.headers);
  headers.set('Content-Type', contentType);

  return new Response(body, {
    ...init,
    headers,
  });
}
