import { Input } from '~/components/Input';
import { isEmail } from './validation';

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
