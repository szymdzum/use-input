import { useCallback, useEffect, useMemo, useState } from 'react';
import { useServerValidation } from './useServerValidation';

import type { InputChange, InputFocus, Validator } from 'app/types';
/**
 * Hooks into inputs value and manages its validation state
 * @param {Validator} [validator] - Function to validate the input value
 * @param {string} [inputName] - Optional input "name" attribute for server-side mapping
 * @returns {ValidationResult} value, error, validate, clear, isValid, isDirty
 * @example
 * const { value, error, validate, clear } = useInputValue(validator);
 */
export const useInput = (
  validator: Validator,
  inputName?: string,
): ValidationResult => {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [isDirty, setIsDirty] = useState(false);

  // Helper function to get trimmed value from event
  const getInputValue = useCallback(
    (event: InputChange | InputFocus): string => {
      return event?.target?.value?.trim() ?? '';
    },
    [],
  );

  // Server-side validation handling
  const errorMessage = useServerValidation(inputName || '');
  useEffect(() => {
    if (inputName && errorMessage) {
      setError(errorMessage);
      setIsDirty(true);
    }
  }, [inputName, errorMessage]);

  const validate = useCallback(
    (event: InputFocus) => {
      const inputValue = getInputValue(event);
      const errorMessage = validator(inputValue);
      if (errorMessage) {
        setError(errorMessage);
      } else {
        setError(null);
      }
    },
    [validator, getInputValue],
  );

  // Clears error on input onChange
  const clear = useCallback(
    (event: InputChange) => {
      const newValue = getInputValue(event);
      setValue(newValue);
      setIsDirty(true);
      if (error) {
        setError(null);
      }
    },
    [error, getInputValue],
  );

  const isValid = useMemo(() => {
    return error === null && value.trim().length > 0;
  }, [error, value]);

  const validationResult = useMemo(
    () => ({
      value,
      error,
      clear,
      validate,
      isValid,
      isDirty,
    }),
    [value, error, clear, validate, isValid, isDirty],
  );

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
