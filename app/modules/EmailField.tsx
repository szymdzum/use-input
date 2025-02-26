import type { Validator } from '~/components/Form/validateFormData';
import { Input } from '~/components/Input';
import { AUTH_ERROR } from '~/errors/errors';

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

export const EmailField = () => {
  return (
    <Input
      name="email"
      label="Email"
      type="email"
      placeholder="your@email.com"
      description="Please enter your email address"
      validation={isEmail}
      required
    />
  );
};

EmailField.displayName = 'EmailField';
