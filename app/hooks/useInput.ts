import { useCallback, useMemo, useState } from 'react';
import type { ValidationRule } from '~/modules/validation';
import type { InputChange, InputFocus } from '~/types/react';
import { useServerValidation } from './useServerValidation';

export type UseInputProps = {
  name: string;
  validation?: ValidationRule;
  type?: string;
  required?: boolean;
  placeholder?: string;
  label: string;
  description?: string;
};

export const useInput = ({
  name,
  validation = noValidation,
  type = 'text',
  required = false,
  placeholder,
  label,
  description,
}: UseInputProps) => {
  const [value, setValue] = useState<string>('');
  const [clientError, setClientError] = useState<string | null>(null);
  const [isDirty, setIsDirty] = useState(false);
  const [hasServerError, setHasServerError] = useState(false);

  // Get server-side validation error
  const serverError = useServerValidation(name);

  // Use server error if present and not cleared, otherwise use client error
  const error = (serverError && !hasServerError) ? serverError : clientError;

  const onBlur = useCallback((event: InputFocus) => {
    const inputValue = getInputValue(event);
    const validationError = validation(inputValue);
    setClientError(validationError);
  }, [validation]);

  const onChange = useCallback((event: InputChange) => {
    const newInputValue = getInputValue(event);
    setValue(newInputValue);
    setIsDirty(true);
    setClientError(null);
    setHasServerError(true); // Mark server error as handled
  }, []);

  const isValid = useMemo(() => {
    const hasNoError = error === null;
    const hasValue = value.trim().length > 0;
    return hasNoError && hasValue;
  }, [error, value]);

  // Return everything needed for the input
  return {
    inputProps: {
      id: `input-${name}`,
      name,
      type,
      value,
      required,
      placeholder,
      onChange,
      onBlur,
      'aria-invalid': Boolean(error),
      'aria-describedby': error ? `${name}-error` : undefined,
    },
    labelProps: {
      htmlFor: `input-${name}`,
      children: label,
    },
    error,
    description,
    isValid,
    isDirty,
  };
};

const noValidation: ValidationRule = () => null;

const getInputValue = (event: InputChange | InputFocus): string => {
  return event?.target?.value?.trim() ?? '';
};
