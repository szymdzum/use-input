import type React from 'react';

export type ReactChildren = React.ReactNode;

export type ButtonProps = {
  children: ReactChildren;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type InputFocus = React.FocusEvent<HTMLInputElement>;
export type InputChange = React.ChangeEvent<HTMLInputElement>;
export type TextAreaFocus = React.FocusEvent<HTMLTextAreaElement>;
export type SelectFocus = React.FocusEvent<HTMLSelectElement>;

export type Validator = (value: string) => string | null;
