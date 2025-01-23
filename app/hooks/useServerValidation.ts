import { useActionData } from 'react-router';

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