import { useCallback, useEffect, useMemo, useState } from 'react';
import { useServerValidation } from './useServerValidation';

import type { InputChange, InputFocus } from 'app/types';
import type { ValidationRule } from '~/ui/validation';

const noValidation: ValidationRule = () => null;
  // Helper function to get trimmed value from event
const getInputValue = (event: InputChange | InputFocus): string => {
  return event?.target?.value?.trim() ?? '';
};


export const useInput = (
  rule: ValidationRule = noValidation,
  inputName?: string,
): ValidationResult => {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [isDirty, setIsDirty] = useState(false);

  // Server-side validation handling
  const errorMessage = useServerValidation(inputName || '');
  useEffect(() => {
    if (inputName && errorMessage) {
      setError(errorMessage);
      setIsDirty(true);
    }
  }, [inputName, errorMessage]);

  const validate = (event: InputFocus) => {
    const inputValue = getInputValue(event);
    const errorMessage = rule(inputValue);
    if (errorMessage) {
        setError(errorMessage);
      } else {
      setError(null);
    }
  };

  // Clears error on input onChange
  const clear = (event: InputChange) => {
    const newValue = getInputValue(event);
    setValue(newValue);
    setIsDirty(true);
    if (error) {
      setError(null);
    }
  };

  const isValid = error === null && value.trim().length > 0;

  const validationResult: ValidationResult = {
      value,
      error,
    clear,
    validate,
    isValid,
    isDirty,
  };

  return validationResult;
};

type ValidationResult = {
  /** Current value of the input field */
  value: string;
  /** Current error message, null if no error exists */
  error: string | null;
  /** Indicates whether the input is valid */
  isValid: boolean;
  /** Indicates whether the input has been modified by the user */
  isDirty: boolean;
  /**
   * (onBlur) Validates the input value using the provided validator function
   * @param event The focus event object
   */
  validate: (event: InputFocus) => void;
  /**
   * (onChange) Handles input changes, updates the value and clears existing errors
   * @param event The change event object
   */
  clear: (event: InputChange) => void;
};
