type FormSuccess<T> = {
  success: true;
  data: T;
};

type FormError = {
  success: false;
  errors: Record<string, string>;
};

export type FormResponse<T> = FormSuccess<T> | FormError;

export function createFormResponse<T>(result: {
  success: boolean;
  data?: T;
  errors?: Record<string, string>;
}): FormResponse<T> {
  if (!result.success) {
    return {
      success: false,
      errors: result.errors ?? {},
    };
  }

  return {
    success: true,
    data: result.data as T,
  };
}
