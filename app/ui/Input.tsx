import type React from 'react';
import './Input.module.css';
import type { InputChange } from '~/hooks/types';
import type { InputFocus } from '~/hooks/types';

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
  className?: string;
  placeholder?: string;
  onChange: (event: InputChange) => void;
  onBlur?: (event: InputFocus) => void;
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
const Field = ({ children }: FieldProps) => <div>{children}</div>;

const Label = ({ children, htmlFor }: LabelProps) => (
  <label htmlFor={htmlFor}>{children}</label>
);

const Control = ({
  id,
  name,
  type,
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

const ErrorMessage = ({ children }: ErrorProps) => {
  if (!children) {
    return null;
  }

  return <div role="alert">{children}</div>;
};

const Description = ({ error, inputName, children }: DescriptionProps) => {
  if (error || !children) {
    return null;
  }

  return <div id={getDescriptionId(inputName)}>{children}</div>;
};

// Input namespace
export const Input = {
  Field,
  Label,
  Control,
  ErrorMessage,
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
