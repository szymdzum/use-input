export const AUTH_ERROR = {
  // Field validation errors
  EMAIL_REQUIRED: 'Email is required',
  PASSWORD_REQUIRED: 'Password is required',

  // Format validation errors
  INVALID_EMAIL: 'Please enter a valid email address',
  INVALID_PASSWORD: 'Password must be at least 8 characters long and contain at least one number',

  // Authentication errors
  INVALID_CREDENTIALS: 'Invalid email or password',
  ACCOUNT_LOCKED: 'Your account has been locked. Please contact support',

  // Server errors
  SERVER_ERROR: 'An unexpected error occurred. Please try again later'
} as const;