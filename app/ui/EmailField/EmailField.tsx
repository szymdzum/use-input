import { Input } from '../Input/Input';
import { isEmail } from '../validation';

export const EmailField = () => {

  return (
    <Input
      name="email"
      label="Email"
      type="email"
      placeholder="Enter your email"
      description="Please enter a valid email address"
      validator={isEmail}
    />
  );
};
