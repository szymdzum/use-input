import { TextField } from '~/ui/TextInput/TextInput';
import type { Route } from './+types/home';

export function meta(_: Route.MetaArgs) {
  return [
    { title: 'use Input' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.SERVER_VALUE };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const validator = (value: string) =>
    value.length < 3 ? 'Username too short' : null;

  return (
    <div>
      <p>{loaderData.message}</p>
      <TextField
        name="username"
        label="Username"
        validator={validator}
        description="Must be at least 3 characters long"
      />
    </div>
  );
}

// Validation utility function
function validateInput(value, rules) {
  for (const rule of rules) {
    const error = rule(value);
    if (error) {
      return error;
    }
  }
  return null;
}

// Validation rules
const required = (value) => {
  if (!value) {
    return 'This field is required.';
  }
  return null;
};

const isString = (value) => {
  if (typeof value !== 'string') {
    return 'This field must be a string.';
  }
  return null;
};

const isEmail = (value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) {
    return 'Please enter a valid email address.';
  }
  return null;
};

const minLength = (min) => (value) => {
  if (value.length < min) {
    return `This field must be at least ${min} characters long.`;
  }
  return null;
};

const maxLength = (max) => (value) => {
  if (value.length > max) {
    return `This field must be no more than ${max} characters long.`;
  }
  return null;
};

// Example usage
const usernameRules = [required, isString, minLength(3), maxLength(20)];
const emailRules = [required, isString, isEmail];

const username = 'user';
const email = 'user@example.com';

console.log(validateInput(username, usernameRules)); // Output: null
console.log(validateInput(email, emailRules)); // Output: null

const invalidUsername = 'us';
console.log(validateInput(invalidUsername, usernameRules)); // Output: 'This field must be at least 3 characters long.'

const invalidEmail = 'userexample.com';
console.log(validateInput(invalidEmail, emailRules)); // Output: 'Please enter a valid email address.'