import type { ReactElement } from 'react';
import type { UseInputProps } from '~/hooks/useInput';
import { useInput } from '~/hooks/useInput';


export const Input = (props: UseInputProps): ReactElement => {
  const { inputProps, labelProps, error, description } = useInput(props);

  return (
    <div className="field">
      <label htmlFor={inputProps.id}>{labelProps.children}</label>
      <input {...inputProps} />

      {error && (
        <div id={`${props.name}-error`} className="error">
          {error}
        </div>
      )}

      {description && !error && (
        <div className="description">
          {description}
        </div>
      )}
    </div>
  );
};

Input.displayName = 'Input';
