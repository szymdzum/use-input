
// Success type with generic data
type FormSuccess<T> = {
  type: 'success';
  data: T;
};

// Error type for form validation/submission errors
type FormError = {
  type: 'error';
  errors: Record<string, string>;
};

// Union type for all possible form responses
export type FormResponse<T> = FormSuccess<T> | FormError;

export function createFormResponse<T>(result: {
  type: 'success' | 'error';
  data?: T;
  errors?: Record<string, string>;
}) {
  if (result.type === 'error') {
    return {

      type: 'error',
      errors: result.errors ?? {},
    };
  }

  // For errors, return just the errors

  return {
    type: 'success',
    data: result.data as T,
  };
}

// Type guard helpers for checking response type
export function isFormSuccess<T>(response: FormResponse<T>): response is FormSuccess<T> {
  return response.type === 'success';
}

export function isFormError<T>(response: FormResponse<T>): response is FormError {
  return response.type === 'error';
}
