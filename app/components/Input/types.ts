import type { InputHTMLAttributes } from "react";
import type { ValidationRule } from "../../ui/validation";

export type InputProps = {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  description?: string;
  validation?: ValidationRule;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'name'>;

export type InputMessageProps = {
  name: string;
  error: string | null | undefined;
  description?: string;
};
