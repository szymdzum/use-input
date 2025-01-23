import { useCallback, useEffect, useMemo, useState } from "react";
import { useActionData } from "react-router";
import type { InputChange, InputFocus, Validator } from "./types";

/**
 * Hooks into inputs value and manages its validation state
 * @param {Validator} [validator] - Function to validate the input value
 * @param {string} [inputName] - Optional input "name" attribute for server-side mapping
 * @returns {ValidationResult} value, error, validate, clear, isValid, isDirty
 * @example
 * const { value, error, validate, clear } = useInputValue(validator);
 */
export const useInputValue = (
  validator: Validator,
  inputName?: string,
): ValidationResult => {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [isDirty, setIsDirty] = useState(false);

  // Helper function to get trimmed value from event
  const getInputValue = useCallback(
    (event: InputChange | InputFocus): string => {
      return event?.target?.value?.trim() ?? "";
    },
    [],
  );

  // Server-side validation handling
  const errorMessage = useServerValidation(inputName || "");
  if (inputName) {
    useEffect(() => {
      if (errorMessage) {
        setError(errorMessage);
        setIsDirty(true);
      }
    }, [errorMessage]);
  }

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

type ServerValidation = {
  errors?: Record<string, string>;
};

/**
 * Hook to handle server-side validation errors for a specific form field
 * @param {string} [inputName] - fieldId to map to the server-side errors
 * @returns {string | null} Error message for the field, or null if no error exists
 */
export const useServerValidation = (inputName: string): string | null => {
  const validationResponse = useActionData<ServerValidation>();
  return validationResponse?.errors?.[inputName] ?? null;
};
