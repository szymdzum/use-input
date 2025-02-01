import { useState } from "react";
import { Label } from "~/components/Input/Label";

import type { InputProps } from "~/components/Input/types";

import styles from "../Input/Input.module.css";
import { Show } from "../Input/Show";
import { ForgotPassword } from "./ForgotPassword";
import passwordStyles from "./Password.module.css";
import { PasswordToggle } from "./PasswordToggle";

type PasswordFieldProps = Omit<InputProps, "type" | "label"> & {
  showForgotPassword?: boolean;
  onForgotPassword?: () => void;
};

export const PasswordField = ({
  name = "password",
  description,
  validation,
  required = true,
  disabled,
  showForgotPassword,
  onForgotPassword,
  ...props
}: PasswordFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.field}>
      <div className={passwordStyles.header}>
        <Label htmlFor={name} required={required}>
          Password
        </Label>

        <Show if={showForgotPassword}>
          <ForgotPassword onForgotPassword={() => {}} />
        </Show>
      </div>

      <div className={passwordStyles.inputWrapper}>
        <input
          {...props}
          name={name}
          type={showPassword ? "text" : "password"}
          disabled={disabled}
        />
        <PasswordToggle onVisibilityChange={setShowPassword} />
      </div>
    </div>
  );
};

PasswordField.displayName = "PasswordField";
