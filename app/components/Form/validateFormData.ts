export type Validator = (value: string) => string | null;

export type FormSchema = Record<string, Validator>;

export type ValidatedData<Schema> = {
  [K in keyof Schema]: string;
};

export type ValidationErrors<T> = {
  [K in keyof T]?: string;
};

// Result types
export type ValidationSuccess<T> = {
  success: true;
  data: T;
};

export type ValidationFailure<T> = {
  success: false;
  errors: ValidationErrors<T>;
};

export type ValidationResult<T> = ValidationSuccess<T> | ValidationFailure<T>;

export function validateFormData<Schema extends FormSchema>(
  formData: FormData,
  schema: Schema
): ValidationResult<ValidatedData<Schema>> {
  const data: Record<string, unknown> = {};
  const errors: Record<string, string> = {};

  for (const [key, validator] of Object.entries(schema)) {
    const value = formData.get(key);
    const stringValue = value?.toString().trim() ?? "";

    const error = validator(stringValue);
    if (error) {
      errors[key] = error;
      continue;
    }

    data[key] = stringValue;
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      errors: errors as ValidationErrors<ValidatedData<Schema>>,
    };
  }

  return {
    success: true,
    data: data as ValidatedData<Schema>,
  };
}
