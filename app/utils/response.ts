type JsonResponse<T> = {
  success: boolean;
  data?: T;
  errors?: Record<string, string>;
  error?: string;
};

export function createResponse<T>(
  body: JsonResponse<T>,
  status = 200
) {
  const headers = new Headers();
  headers.set('Content-Type', 'application/json');
  headers.set('X-Content-Type-Options', 'nosniff');

  return new Response(JSON.stringify(body), {
    status,
    headers
  });
}