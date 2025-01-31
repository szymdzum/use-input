import { Input } from '../components/Input/Input';
import { combineRules, maxLength, minLength, required } from './validation';


export const UsernameField = () => {
  const usernameRules = combineRules(
    required,
    minLength(3),
    maxLength(20)
  );

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
