import { useState } from "react";
import { Label } from "~/components/Input/Label";
import { Message } from "~/components/Input/Message";
import { useInput } from "~/hooks/useInput";
import { Show } from "../../Input/Show";
import { LinkToResetPassword } from "../LinkToResetPassword/LinkToResetPassword";
import { PasswordToggle } from "../PasswordToggle/PasswordToggle";
import styles from "./PasswordField.module.css";


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
  showForgotPassword = true,
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
    <div className={styles.inputField}>
      <div className={styles.labelHeader}>
        <Label htmlFor={name} required={required}>
          Password
        </Label>
        <Show if={showForgotPassword}>
            <LinkToResetPassword  />
        </Show>
      </div>
      <div className={styles.inputWrapper}>
        <input
          {...props}
          name={name}
          value={value}
          onChange={onChangeClear}
          onBlur={onBlurValidate}
          disabled={disabled}
          required={required}
          type={showPassword ? "text" : "password"}
        />
        <PasswordToggle
           onVisibilityChange={setShowPassword}
        />
      </div>
      <Message
        name={name}
        error={error}
      />
    </div>
  );
};

PasswordField.displayName = "PasswordField";
