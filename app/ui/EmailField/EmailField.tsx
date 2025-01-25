import { useInput } from '../../hooks/useInput';
import { Input } from '../Input/Input';
import style from './EmailField.module.css';

import type { Validator } from 'app/types';

type EmailFieldProps = {
  name: string;
  label: string;
  validator: Validator;
  description?: string;
  placeholder?: string;
  className?: string;
};

export const EmailField = ({
  name,
  label,
  validator,
  description,
  placeholder = 'Enter your email',
}: EmailFieldProps) => {
  const { value, error, clear, validate, isDirty } = useInput(
    validator,
    name,
  );

  return (
    <Input.Field className={style.emailField}>
      <Input.Label htmlFor={name}>{label}</Input.Label>

      <Input.Control
        id={name}
        name={name}
        type="email"
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
