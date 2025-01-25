// Type definitions
type ValidationRule<T> = (value: T) => string | null;

// Validation utility function
function validateInput<T>(
  value: T,
  rules: ValidationRule<T>[]
): string | null {
  for (const rule of rules) {
    const error = rule(value);
    if (error) {
      return error;
    }
  }
  return null;
}

// Validation rules
const required: ValidationRule<string> = (value) => {
  if (!value) {
    return 'This field is required.';
  }
  return null;
};

const isString: ValidationRule<unknown> = (value) => {
  if (typeof value !== 'string') {
    return 'This field must be a string.';
  }
  return null;
};

const isEmail: ValidationRule<string> = (value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) {
    return 'Please enter a valid email address.';
  }
  return null;
};

const minLength = (min: number): ValidationRule<string> => (value) => {
  if (value.length < min) {
    return `This field must be at least ${min} characters long.`;
  }
  return null;
};

const maxLength = (max: number): ValidationRule<string> => (value) => {
  if (value.length > max) {
    return `This field must be no more than ${max} characters long.`;
  }
  return null;
};

// Example usage
const usernameRules: ValidationRule<string>[] = [required, isString, minLength(3), maxLength(20)];
const emailRules: ValidationRule<string>[] = [required, isString, isEmail];

const username = 'user';
const email = 'user@example.com';

console.log(validateInput(username, usernameRules)); // Output: null
console.log(validateInput(email, emailRules)); // Output: null

const invalidUsername = 'us';
console.log(validateInput(invalidUsername, usernameRules)); // Output: 'This field must be at least 3 characters long.'

const invalidEmail = 'userexample.com';
console.log(validateInput(invalidEmail, emailRules)); // Output: 'Please enter a valid email address.'