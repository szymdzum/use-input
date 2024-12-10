import { Input, type InputProps } from "../Input";
/**
 * Specialized input component for passwords with preconfigured settings:
 * - Secure password input with masked characters
 * - Password manager integration (supports both login and registration flows)
 * - Optimized keyboard layout
 * - Disabled spellcheck
 * 
 * @component
 * @param {PasswordProps} props - Component props
 * @param {string} [props.id="password"] - Input field ID
 * @param {string} [props.name="password"] - Input field name
 * @param {string} [props.label="Password"] - Input label text
 * @param {PasswordAutoComplete} [props.autoComplete="current-password"] - Autocomplete attribute for login or registration
 * @example
 * // Login form
 * <Password autoComplete="current-password" />
 * 
 * // Registration form
 * <Password autoComplete="new-password" />
 */

const password = "password" as const;

type PasswordProps = Omit<InputProps, "id"> & { id?: string };

const Password = ({
  id = password,
  name = password,
  label = "Password",
  autoComplete = "current-password",
  ...props
}: PasswordProps) => {

  return (
    <Input
      id={id}
      name={name}
      label={label}
      type={password}
      inputMode="text"
      autoComplete={autoComplete}
      spellCheck={false}
      {...props}
    />
  );
};

Password.displayName = "Password";

export { Password };
export type { PasswordProps };
