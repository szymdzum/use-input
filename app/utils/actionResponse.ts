type ActionSuccess<T> = {
  ok: true;
  data: T;
};

type ActionError = {
  ok: false;
  errors: Record<string, string>;
};

export type ActionResponse<T> = ActionSuccess<T> | ActionError;

export const createActionResponse = {
  success: <T>(data: T): ActionResponse<T> => ({
    ok: true,
    data,
  }),

  error: (errors: Record<string, string>): ActionError => ({
    ok: false,
    errors,
  }),
};