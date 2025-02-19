import { Input } from '~/components/Input';

export const TextField = () => {
  return (
    <Input
      name="text"
      label="Text"
      type="text"
    />
  );
};

TextField.displayName = 'TextField';
