import styles from "./Input.module.css";

import { useInput } from "~/hooks/useInput";
import { Label } from "./Label";
import { Message } from "./Message";
import { ariaAttributes, useInputIds } from "./helpers";

import type { ReactElement } from "react";
import type { InputProps } from "./types";


export const Input = ({
  name,
  label,
  type = 'text',
  placeholder,
  description,
  validation,
  required,
  ...props
}: InputProps): ReactElement => {

  const {
    value,
    error,
    isDirty,
    isValid,
    onBlurValidate,
    onChangeClear,
  } = useInput(validation);

  const ids = useInputIds(name);
  const inputId = ids.inputId;
  const errorId = ids.errorId;
  const descriptionId = ids.descriptionId;

  const isInvalid = isDirty && !isValid;

  const ariaErrorMessage = ariaAttributes(error).errorMessage(errorId);
  const ariaDescribedBy = ariaAttributes(error).descriptionBy(descriptionId);

  return (
    <div className={styles.field}>
      <Label htmlFor={inputId} required={required}>
        {label}
      </Label>
      <input
        {...props}
        name={name}
        type={type}
        id={inputId}
        value={value}
        required={required}
        placeholder={placeholder}
        onBlur={onBlurValidate}
        onChange={onChangeClear}
        aria-invalid={isInvalid}
        aria-errormessage={ariaErrorMessage}
        aria-describedby={ariaDescribedBy}
      />

      <Message
        name={name}
        error={error}
        description={description}
      />
    </div>
  );
};

Input.displayName = 'Input';
