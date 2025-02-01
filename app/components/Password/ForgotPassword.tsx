import type { ButtonHTMLAttributes } from "react";
import styles from "./Password.module.css";

type ForgotPasswordProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  onForgotPassword: () => void;
};

export const ForgotPassword = ({
  onForgotPassword,
  ...props
}: ForgotPasswordProps) => {
  return (
    <button
      type="button"
      className={styles.forgotPassword}
      onClick={onForgotPassword}
      {...props}
    >
      Forgot password?
    </button>
  );
};

ForgotPassword.displayName = "ForgotPassword";