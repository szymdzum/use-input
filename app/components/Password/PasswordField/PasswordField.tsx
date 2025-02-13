import clsx from "clsx";
import { type ChangeEvent, useState } from "react";
import { Label } from "~/components/Input/Label";
import { Message } from "~/components/Input/Message";
import { useInput } from "~/hooks/useInput";
import { Show } from "../../Input/Show";
import { LinkToResetPassword } from "../LinkToResetPassword/LinkToResetPassword";
import { PasswordToggle } from "../PasswordToggle/PasswordToggle";
import styles from "./PasswordField.module.css";


type PasswordFieldProps = {
  /** HTML input name attribute - defaults to "password" */
  name?: string;
  /** Label text - defaults to "Password" */
  label?: string;
  /** Marks as required field - defaults to true */
  required?: boolean;
  /** Shows forgot password link - defaults to true */
  showForgotPassword?: boolean;
  /** Callback for forgot password click */
  onForgotPassword?: () => void;
  /** Controlled input value */
  value?: string;
  /** Change handler with direct value access */
  onChange?: (value: string) => void; // Simplified signature
  /** Validation error message */
  error?: string | null;
  /** Additional class names */
  className?: string;
  /** HTML id attribute */
  id?: string;
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
  className,
  id,
  ...props
}: PasswordFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

 const { onBlurValidate } = useInput(passwordRules, name);

  return (
    <div className={`${styles.inputField} ${className || ''}`} id={id}>
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
          id={id}
          value={value}
          // im sorry for this
          onChange={(e) => onChange?.(e.target.value)}
          className={clsx(styles.input, className)}
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
