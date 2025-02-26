export type Validator = (value: string) => string | null;

export type FormSchema = Record<string, Validator>;

export type ValidatedData<Schema> = {
  [K in keyof Schema]: string;
};

export type ValidationErrors<T> = {
  [K in keyof T]?: string;
};

// Result types using consistent naming
export type ValidationStatus = 'success' | 'error';

export type ValidationResult<T> = {
  status: ValidationStatus;
  data?: T;
  errors?: ValidationErrors<T>;
};

export function validateFormData<Schema extends FormSchema>(
  formData: FormData,
  schema: Schema,
): ValidationResult<ValidatedData<Schema>> {
  const data: Record<string, unknown> = {};
  const errors: Record<string, string> = {};

  for (const [key, validator] of Object.entries(schema)) {
    const value = formData.get(key);
    const stringValue = value?.toString().trim() ?? '';

    const error = validator(stringValue);
    if (error) {
      errors[key] = error;
      continue;
    }
    data[key] = stringValue;
  }

  if (Object.keys(errors).length > 0) {
    return {
      status: 'error',
      errors
    };
  }

  return {
    status: 'success',
    data: data as ValidatedData<Schema>
  };
}
