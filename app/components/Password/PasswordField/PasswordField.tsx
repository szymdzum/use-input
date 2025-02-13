import { type ChangeEvent, useState } from "react";
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
  showForgotPassword?: boolean;
  onForgotPassword?: () => void;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string | null;
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
  showForgotPassword = true,
  onForgotPassword,
  value,
  onChange,
  error,
  ...props
}: PasswordFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

 const { onBlurValidate } = useInput(passwordRules, name);

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
          onChange={onChange}
          onBlur={onBlurValidate}
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
