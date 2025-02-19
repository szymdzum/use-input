import { Input } from '../components/Input';
import { usernameRules } from './validation';

export const UsernameField = () => {
  return (
    <Input
      name="username"
      label="Username"
      type="text"
      placeholder="Enter your username"
      validation={usernameRules}
      description="Choose a unique username (3-20 characters)"
    />
  );
};
