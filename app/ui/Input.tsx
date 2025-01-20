import React from 'react';
import styles from './Input.module.css';

// Utility function
const getDescriptionId = (inputName: string) => `${inputName}-description`;

// Types
type FieldProps = {
  children: React.ReactNode;
  className?: string;
};

type LabelProps = {
  children: React.ReactNode;
  className?: string;
  htmlFor?: string;
};

type ControlProps = {
  id?: string;
  name: string;
  type?: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
  placeholder?: string;
  'aria-describedby'?: string;
  'aria-invalid'?: boolean;
  'aria-label'?: string;
};

type ErrorProps = {
  children?: React.ReactNode;
  className?: string;
};

type DescriptionProps = {
  error: string | null;
  inputName: string;
  children: React.ReactNode;
  className?: string;
};

// Components
const Field = ({ children }: FieldProps) => (
  <div>{children}</div>
);

const Label = ({ children, htmlFor }: LabelProps) => (
  <label htmlFor={htmlFor}>{children}</label>
);

const Control = ({
  id,
  name,
  type = 'text',
  value,
  onChange,
  onBlur,
  placeholder,
  'aria-describedby': ariaDescribedby,
  'aria-invalid': ariaInvalid,
  'aria-label': ariaLabel,
  ...props
}: ControlProps) => (
  <input
    {...props}
    id={id || name}
    name={name}
    type={type}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
    placeholder={placeholder}
    aria-describedby={ariaDescribedby}
    aria-invalid={ariaInvalid}
    aria-label={ariaLabel || name}
  />
);

const Error = ({ children }: ErrorProps) => {
  if (!children) return null;

  return (
    <div role="alert">
      {children}
    </div>
  );
};

const Description = ({ error, inputName, children }: DescriptionProps) => {
  if (error || !children) return null;

  return (
    <div id={getDescriptionId(inputName)}>
      {children}
    </div>
  );
};

// Compose the Input namespace object
export const Input = {
  Field,
  Label,
  Control,
  Error,
  Description,
  getDescriptionId,
};

// Type exports
export type {
  FieldProps,
  LabelProps,
  ControlProps,
  ErrorProps,
  DescriptionProps,
};

// Default export
export default Input;