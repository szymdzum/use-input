import { useCallback, useEffect, useMemo, useState } from 'react';
import type { InputChange, InputFocus } from '~/types';
import type { ValidationRule } from '~/ui/validation';
import { useServerValidation } from './useServerValidation';

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
  onBlurValidate: (event: InputFocus) => void;
  /**
   * (onChange) Handles input changes, updates the value and clears existing errors
   * @param event The change event object
   */
  onChangeClear: (event: InputChange) => void;
};

export const useInput = (
  validationRule: ValidationRule = noValidation,
  inputName?: string,
): ValidationResult => {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [isDirty, setIsDirty] = useState(false);

  const onBlurValidate = useCallback((event: InputFocus) => {
    const inputValue = getInputValue(event);
    const validationError = validationRule(inputValue);
    setError(validationError);
  }, [validationRule]); // Wont change for now.

  const onChangeClear = useCallback((event: InputChange) => {
    const newInputValue = getInputValue(event);
    setValue(newInputValue);
    setIsDirty(true);
    setError(null);
  }, []);

  const isValid = useMemo(() => {
    const hasNoError = error === null;
    const hasValue = value.trim().length > 0;
    return hasNoError && hasValue;
  }, [error, value]);

  // Server-side validation handling
  const serverError = useServerValidation(inputName || '');

  useEffect(() => {
    if (inputName && serverError) {
      setError(serverError);
      setIsDirty(true);
    }
  }, [inputName, serverError]);

  const validationResult: ValidationResult = {
    value,
    error,
    isValid,
    isDirty,
    onBlurValidate,
    onChangeClear,
  };

  return validationResult;
};

const noValidation: ValidationRule = () => null;

const getInputValue = (
  event: InputChange | InputFocus
): string => {
  return event?.target?.value?.trim() ?? '';
};
