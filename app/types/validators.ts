import type { StandardSchemaV1 } from "./schemaV1";

// XD
type ValidationResult<T> = StandardSchemaV1.Result<T>;
type Validator<T> = (value: unknown) => ValidationResult<T>;

// Base layer handling StandardSchema compliance
const createStandardSchema = <T>(validate: Validator<T>): StandardSchemaV1<T> => ({
  '~standard': {
    version: 1,
    vendor: 'CustomValidator',
    validate,
  }
});

// Simple creator for daily use
export const createValidator = <T>(validate: Validator<T>) => {
  const schema = createStandardSchema(validate);
  return {
    validate: schema['~standard'].validate,
    _schema: schema // available if needed, but not in the way
  };
};

type Result<T> = StandardSchemaV1.Result<T>;

// Example usage
export const CheckWhatsThat: (value: unknown) => Result<string> = (value) => {
  if (typeof value !== "string") {
    return { issues: [{ message: "Sorry, string only" }] };
  }
  const trimmed = value.trim();

  // Empty or whitespace
  if (value.length > 0 && trimmed.length === 0) {
    return { issues: [{ message: "Whitespace Empty" }] };
  }

  const hasControlChars = /[^\x20-\x7E]/.test(value);
  if (hasControlChars) {
    return { issues: [{ message: "Contains invalid control characters" }] };
  }
  // HTML tags
  if (/<[^>]*>/g.test(value)) {
    return { issues: [{ message: "HTML not allowed" }] };
  }

  // Excessive whitespace
  if (/\s{2,}/.test(value)) {
    return { issues: [{ message: "Contains multiple consecutive spaces" }] };
  }

  // Unicode control characters
  if (/[\u0080-\u009F]/.test(value)) {
    return { issues: [{ message: "Contains invalid Unicode control characters" }] };
  }

  // Zero-width characters
  if (/\u200B|\u200C|\u200D|\uFEFF/.test(value)) {
    return { issues: [{ message: "Contains zero-width characters" }] };
  }

  // Very long strings
  if (value.length > 1000) {
    return { issues: [{ message: "String is too long (max 1000 characters)" }] };
  }

  return { value: trimmed };
};

// Example usage
export const nonEmptyString: (value: string) => Result<string> = (value) => {
  if (value.length === 0) {
    return { issues: [{ message: "This string is not empty" }] };
  }
  return { value };
};

// Check the others
export const nullValidator: (value: unknown) => Result<null> = (value) => {
  if (value === null) {
    return { value };
  }
  return { issues: [{ message: "Value must be null" }] };
};

export const undefinedValidator: (value: unknown) => Result<undefined> = (value) => {
  if (value === undefined) {
    return { value };
  }
  return { issues: [{ message: "Value must be undefined" }] };
};

export const numberValidator: (value: unknown) => Result<number> = (value) => {
  if (typeof value !== "number" || Number.isNaN(value)) {
    return { issues: [{ message: "Value must be a valid number" }] };
  }
  return { value };
};

export const booleanValidator: (value: unknown) => Result<boolean> = (value) => {
  if (typeof value !== "boolean") {
    return { issues: [{ message: "Value must be a boolean" }] };
  }
  return { value };
};

export const bigintValidator: (value: unknown) => Result<bigint> = (value) => {
  if (typeof value !== "bigint") {
    return { issues: [{ message: "Value must be a bigint" }] };
  }
  return { value };
};

export const symbolValidator: (value: unknown) => Result<symbol> = (value) => {
  if (typeof value !== "symbol") {
    return { issues: [{ message: "Value must be a symbol" }] };
  }
  return { value };
};

// Then define small single-responsibility validators:
const trimString: (value: unknown) => Result<string> = (value) => {
  if (typeof value !== "string") {
    return { issues: [{ message: "Value must be a string" }] };
  }
  return { value: value.trim() };
};

// Example usage
export const isEmail: (value: unknown) => Result<string> = (value) => {
  if (typeof value !== "string") {
    return { issues: [{ message: "Value must be a string" }] };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) {
    return { issues: [{ message: "Please enter a valid email" }] };
  }
  return { value };
};

export function joinValidators<I>(
  ...fns: Array<(value: I) => Result<I>>
): (value: I) => Result<I> {
  return (value: I) => {

    let currentValue = value;
    for (const fn of fns) {
      const result = fn(currentValue);
      if ("issues" in result) {
        return result;
      }
      currentValue = result.value;
      }
    return { value: currentValue };
  };
}

// Compose them in a pipeline:
export const EmailValidator = createValidator(
  joinValidators<unknown>(trimString, isEmail)
);
