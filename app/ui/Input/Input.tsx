import type { InputHTMLAttributes } from "react";
import { useInput } from "~/hooks/useInput";
import styles from "./Input.module.css";

type InputProps = {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  description?: string;
  validator?: (value: string) => string | null;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'name' | 'type'>;



export const Input = ({
  name,
  label,
  type = 'text',
  placeholder,
  description,
  validator,
  ...props
}: InputProps) => {

  const { value, error, clear, validate, isDirty } = useInput(validator);

  return (
    <div className={styles.field}>
      <label htmlFor={name}>{label}</label>

      <input
        {...props}
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={clear}
        onBlur={validate}
        placeholder={placeholder}
        aria-describedby={description && `${name}-description`}
        aria-invalid={isDirty && !!error}
      />

      {error ? (
        <div role="alert">{error}</div>
      ) : description ? (
        <div id={`${name}-description`}>{description}</div>
      ) : null}
    </div>
  );
};