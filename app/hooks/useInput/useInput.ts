import { useState, ChangeEvent } from 'react';

interface UseInputProps {
  initialValue?: string;
}

export function useInput({ initialValue = '' }: UseInputProps = {}) {
  const [value, setValue] = useState(initialValue);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return {
    value,
    onChange,
  };
}