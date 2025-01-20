import { Input } from './Input';
import { useInputValue } from '../hooks/useInputValue';
import type { Validator } from '../hooks/types';

type TextInputProps = {
  name: string;
  label: string;
  validator: Validator;
  description?: string;
  placeholder?: string;
  className?: string;
};

export const TextInput = ({
  name,
  label,
  validator,
  description,
  placeholder,
  className
}: TextInputProps) => {
  const { value, error, clear, validate, isDirty } = useInputValue(validator, name);

  return (
    <Input.Field className={className}>

      <Input.Label htmlFor={name}>{label}</Input.Label>

      <Input.Control
        id={name}
        name={name}
        value={value}
        onChange={clear}
        onBlur={validate}
        placeholder={placeholder}
        aria-describedby={description ? Input.getDescriptionId(name) : undefined}
        aria-invalid={isDirty && !!error}
      />

      <Input.Error>{error}</Input.Error>

      <Input.Description error={error} inputName={name}>
        {description}
      </Input.Description>

    </Input.Field>
  );
};
