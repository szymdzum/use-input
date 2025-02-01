import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

import { Label } from "~/components/Input/Label";

import type { InputProps } from "~/components/Input/types";

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
    <div>
      <div className="flex items-center justify-between">
        <Label htmlFor={name} required={required}>
          Password
        </Label>

        {showForgotPassword && (
          <button
            type="button"
            className="px-0 text-sm text-zinc-400 hover:text-zinc-100"
            onClick={onForgotPassword}
          >
            Forgot password?
          </button>
        )}
      </div>

      <div className="relative">
        <input
          {...props}
          name={name}
          type={showPassword ? "text" : "password"}
          disabled={disabled}

        />

        <button
          type="button"
          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
          onClick={() => setShowPassword(!showPassword)}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? (
            <EyeOff className="h-4 w-4 text-zinc-400" />
          ) : (
            <Eye className="h-4 w-4 text-zinc-400" />
          )}
        </button>
      </div>
    </div>
  );
};

PasswordField.displayName = "PasswordField";
