import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Show } from "../Input/Show";

type PasswordToggleProps = {
  onVisibilityChange: (isVisible: boolean) => void;
};

export const PasswordToggle = ({ onVisibilityChange }: PasswordToggleProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleVisibility = () => {
    const newValue = !showPassword;
    setShowPassword(newValue);
    onVisibilityChange(newValue);
  };

  return (
    <button
      type="button"
      className="passwordToggle"
      onClick={toggleVisibility}
      aria-label={showPassword ? "Hide password" : "Show password"}
    >
      <Show if={showPassword}>
        <EyeOff className="icon" />
      </Show>

      <Show if={!showPassword}>
        <Eye className="icon" />
      </Show>
    </button>
  );
};

PasswordToggle.displayName = "PasswordToggle";