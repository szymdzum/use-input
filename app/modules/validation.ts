import type { Validator } from '~/components/Form/validateFormData';
import { AUTH_ERROR } from '~/errors/errors';

export type ValidationRule = (value: string) => string | null;

export type Validation = ValidationRule | ValidationRule[];

// Validation rules
// Apprach nr 1 - using a single function
export const required: ValidationRule = (value) => {
  if (!value) {
    return 'This field is required.';
  }
  return null;
};

export const isString: ValidationRule = (value) => {
  if (typeof value !== 'string') {
    return 'This field must be a string.';
  }
  return null;
};

export const minLength = (min: number): ValidationRule => (value) => {
  if (value.length < min) {
    return `This field must be at least ${min} characters long.`;
  }
  return null;
};

export const maxLength = (max: number): ValidationRule => (value) => {
  if (value.length > max) {
    return `This field must be no more than ${max} characters long.`;
  }
  return null;
};

export const combineRules = (...rules: ValidationRule[]): ValidationRule =>
  (value) => {
    for (const rule of rules) {
      const error = rule(value);
      if (error) {
        return error;
      }
    }
    return null;
  };


export const usernameRules = combineRules(
  required,
  minLength(3),
  maxLength(20)
);

// Approach nr 2 - using a single object
export const validatePassword: Validator = (value) => {
  if (!value) {
    return AUTH_ERROR.PASSWORD_REQUIRED;
  }
  if (value.length < 8) {
    return AUTH_ERROR.INVALID_PASSWORD;
  }

  return null;
};

export const isEmail: Validator = (value) => {
  if (!value) {
    return AUTH_ERROR.EMAIL_REQUIRED;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) {
    return AUTH_ERROR.INVALID_EMAIL;
  }

  return null;
};