import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Show } from "../Input/Show";
import styles from "./Password.module.css";

type TypeToggleProps = {
  onVisibilityChange: (isVisible: boolean) => void;
};

export const TypeToggle = ({ onVisibilityChange }: TypeToggleProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleVisibility = () => {
    const newValue = !showPassword;
    setShowPassword(newValue);
    onVisibilityChange(newValue);
  };

  return (
    <button
      type="button"
      className={styles.toggleButton}
      onClick={toggleVisibility}
      aria-label={showPassword ? "Hide password" : "Show password"}
    >
      <Show if={showPassword}>
        <EyeOff className={styles.icon} />
      </Show>

      <Show if={!showPassword}>
        <Eye className={styles.icon} />
      </Show>
    </button>
  );
};

TypeToggle.displayName = "TypeToggle";