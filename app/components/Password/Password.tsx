import { useState } from "react";
import { Label } from "~/components/Input/Label";

import { useInput } from "~/hooks/useInput";
import styles from "../Input/Input.module.css";
import { Message } from "../Input/Message";
import { Show } from "../Input/Show";
import { LinkToRestPassword } from "./LinkToRestPassword";
import passwordStyles from "./Password.module.css";
import { TypeToggle } from "./TypeToggle";

type PasswordFieldProps = {
  name?: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  showForgotPassword?: boolean;
  onForgotPassword?: () => void;
};

export const passwordRules = (value: string) => {

  if (value.length < 8) {
    return "Password must be at least 8 characters long";
  }
  return null;
};

export const PasswordField = ({
  name = "password",
  label = "Password",
  required = true,
  disabled,
  showForgotPassword,
  onForgotPassword,
  ...props
}: PasswordFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

 const {
  value,
  error,
  onBlurValidate,
  onChangeClear,

  } = useInput(
    passwordRules,
    name
  );

  return (
    <div className={styles.field}>
      <div className={passwordStyles.header}>
        <Label htmlFor={name} required={required}>
          Password
        </Label>

        <Show if={showForgotPassword}>
          <LinkToRestPassword  />
        </Show>
      </div>

      <div className={passwordStyles.inputWrapper}>
        <input
          {...props}
          value={value}
          onChange={onChangeClear}
          onBlur={onBlurValidate}
          name={name}
          type={showPassword ? "text" : "password"}
          disabled={disabled}
          required={required}
        />
        <TypeToggle onVisibilityChange={setShowPassword} />
      </div>
      <Message
        name={name}
        error={error}
      />
    </div>
  );
};

PasswordField.displayName = "PasswordField";
