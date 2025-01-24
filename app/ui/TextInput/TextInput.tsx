import { useInput } from '../../hooks/useInput';
import { Input } from '../Input/Input';

import type { Validator } from 'app/types';

type TextFieldProps = {
  name: string;
  label: string;
  validator: Validator;
  description?: string;
  placeholder?: string;
  className?: string;
};

export const TextField = ({
  name,
  label,
  validator,
  description,
  placeholder,
  className,
}: TextFieldProps) => {
  const { value, error, clear, validate, isDirty } = useInput(
    validator,
    name,
  );

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
        aria-describedby={description && Input.getDescriptionId(name)}
        aria-invalid={isDirty && !!error}
      />

      <Input.ErrorMessage>{error}</Input.ErrorMessage>

      <Input.Description error={error} inputName={name}>
        {description}
      </Input.Description>

    </Input.Field>
  );
};
