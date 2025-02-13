import { useCallback, useState } from 'react';

interface PasswordValidation {
  value: string;
  error: string | null;
  isValid: boolean;
  onChange: (value: string) => void;
}

export const usePasswordValidation = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState<string | null>(null);

  const validate = useCallback((value: string) => {

    if (value.length < 8) {
      setError("Must be at least 8 characters");
      return false;
    }
    setError(null);
    return true;
  }, []);

  const onChange = useCallback((newValue: string) => {
    setValue(newValue);
    validate(newValue);
  }, [validate]);

  return {
    value,
    error,
    isValid: !error,
    onChange,
  } as PasswordValidation;
};