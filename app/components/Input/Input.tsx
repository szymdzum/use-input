import { useInput } from "~/hooks/useInput";
import styles from "./Input.module.css";
import { Label } from "./Label";
import { Message } from "./Message";
import { ariaOn, useInputIds } from "./helpers";

import type { ReactElement } from "~/types/react";
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
  } = useInput(validation, name);

  const ids = useInputIds(name);
  const inputId = ids.inputId;
  const errorId = ids.errorId;
  const descriptionId = ids.descriptionId;

  const isInvalid = isDirty && !isValid;

  const ariaErrorMessage = ariaOn(error).errorMessage(errorId);
  const ariaDescribedBy = ariaOn(error).descriptionBy(descriptionId);

  return (
    <div className={styles.inputField}>
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
        onBlur={onBlurValidate}
        onChange={onChangeClear}
        aria-invalid={isInvalid}
        placeholder={placeholder}
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
