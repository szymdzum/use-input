// Define consistent status types
export type ActionStatus = 'success' | 'error';

// Base response type with status field
type BaseActionResponse = {
  status: ActionStatus;
};

// Success response type
export type ActionSuccess<T> = BaseActionResponse & {
  status: 'success';
  data: T;
};

// Error response type
export type ActionError = BaseActionResponse & {
  status: 'error';
  errors: Record<string, string>;
  code?: number; // Optional HTTP status code
};

export type ActionResponse<T> = ActionSuccess<T> | ActionError;

// Common error status codes
export const ErrorCode = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  VALIDATION_ERROR: 422,
  INTERNAL_SERVER_ERROR: 500,
  EMPTY_FIELDS: 400, // For empty field validation errors
};

export const createActionResponse = {
  success: <T>(data: T): Response => {
    const body: ActionSuccess<T> = {
      status: 'success',
      data,
    };

    return new Response(JSON.stringify(body), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },

  error: (errors: Record<string, string> | undefined | null, code: number = ErrorCode.BAD_REQUEST): Response => {
    const body: ActionError = {
      status: 'error',
      errors: errors ?? {},
      code,
    };

    return new Response(JSON.stringify(body), {
      status: code,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
};