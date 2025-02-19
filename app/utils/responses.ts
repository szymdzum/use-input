type ValidationErrors = Record<string, string>;

interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  errors?: ValidationErrors;
}

export const responses = {
  validationError: (errors: ValidationErrors) =>
    createResponse({ success: false, errors }, 422),

  unauthorized: (message = 'Invalid email or password') =>
    createResponse({ success: false, error: message }, 401),

  success: <T>(data: T) =>
    createResponse({ success: true, data }),

  error: (error: Error) =>
    createResponse({
      success: false,
      error: error.message || 'An unexpected error occurred'
    }, 500)
} as const;

function createResponse<T>(body: ApiResponse<T>, status = 200) {
  return new Response(JSON.stringify(body), { status });
}