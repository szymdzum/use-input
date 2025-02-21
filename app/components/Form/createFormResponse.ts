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

/**
 * Create a standardized form response object.
 *
 * Returns a FormError object if the provided type is 'error', including any specified errors (or an empty object if none are provided). For a 'success' type, validates that data is provided, throwing an error if not, and returns a FormSuccess object.
 *
 * @param result - Object containing the response details:
 *   - type: Indicates whether the response is 'success' or 'error'.
 *   - data: Data associated with a success response (required if type is 'success').
 *   - errors: A record of error messages for an error response.
 * @returns A FormResponse representing either a successful or error form submission.
 *
 * @throws Error if the response type is 'success' and data is not provided.
 *
 * @example
 * // Successful response example:
 * createFormResponse({ type: 'success', data: { id: 1, message: 'Submitted successfully' } });
 *
 * @example
 * // Error response example:
 * createFormResponse({ type: 'error', errors: { name: 'Name is required' } });
 */
export function createFormResponse<T>(result: {
  type: 'success' | 'error';
  data?: T;
  errors?: Record<string, string>;
}): FormResponse<T> {
  if (result.type === 'error') {
    return {
      type: 'error',
      errors: result.errors ?? {},
    };
  }

  // For errors, return just the errors
  if (!result.data) {
    throw new Error('Data is required for success response');
  }

  return {
    type: 'success',
    data: result.data as T,
  };
}

/**
 * Checks if the provided form response is a successful response.
 *
 * This type guard verifies that the response's type property is 'success', indicating it contains the required data.
 *
 * @template T - The type of the data in a successful response.
 * @param response - The form response to validate.
 * @returns True if the response is a success, otherwise false.
 *
 * @example
 * const response = { type: 'success', data: { id: 1 } };
 * if (isFormSuccess(response)) {
 *   // Within this block, response is typed as FormSuccess<{ id: number }>
 *   console.log(response.data);
 * }
 */
export function isFormSuccess<T>(response: FormResponse<T>): response is FormSuccess<T> {
  return response.type === 'success';
}

/**
 * Determines whether the provided form response indicates an error.
 *
 * @param response - The form response to evaluate.
 * @returns True if the response's type is "error", otherwise false.
 *
 * @example
 * if (isFormError(response)) {
 *   // Handle the error response, for example:
 *   console.error(response.errors);
 * }
 */
export function isFormError<T>(response: FormResponse<T>): response is FormError {
  return response.type === 'error';
}
