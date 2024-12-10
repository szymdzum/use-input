/**
 * Password validation configuration
 */
export const PASSWORD_RULES = {
  minLength: 4,
  maxLength: 9,
  patterns: {
    uppercase: /[A-Z]/,
    lowercase: /[a-z]/,
    number: /[0-9]/,
    special: /[!@#$%^&*(),.?":{}|<>]/,
  },
} as const;

/**
 * Validates password length requirements
 * @param {string} value - Password to validate
 * @returns {string | null} Error message or null if valid
 * @example
 * const error = passwordLength("pass123");
 * if (error) {
 *   console.log(error); // Password length error message
 * }
 */
export const passwordLength = (value: string): string | null => {
  if (!value) {
    return "Password is required";
  }

  if (value.length < PASSWORD_RULES.minLength) {
    return `Password must be at least ${PASSWORD_RULES.minLength} characters long`;
  }

  if (value.length > PASSWORD_RULES.maxLength) {
    return `Password cannot be longer than ${PASSWORD_RULES.maxLength} characters`;
  }

  return null;
};

/**
 * Validates password complexity requirements including:
 * - Length requirements
 * - Uppercase letter
 * - Lowercase letter
 * - Number
 * - Special character
 * 
 * @param {string} value - Password to validate
 * @returns {string | null} Error message or null if valid
 * @example
 * const error = passwordStrength("Pass123!");
 * if (error) {
 *   console.log(error); // Password complexity error message
 * }
 */
export const passwordStrength = (value: string): string | null => {
  const lengthCheck = passwordLength(value);
  if (lengthCheck) {
    return lengthCheck;
  }

  const { patterns } = PASSWORD_RULES;

  if (!patterns.uppercase.test(value)) {
    return "Password must contain at least one uppercase letter";
  }

  if (!patterns.lowercase.test(value)) {
    return "Password must contain at least one lowercase letter";
  }

  if (!patterns.number.test(value)) {
    return "Password must contain at least one number";
  }

  if (!patterns.special.test(value)) {
    return "Password must contain at least one special character";
  }

  return null;
};
