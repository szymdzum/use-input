import { useEffect, useState } from 'react';
import { useInput } from '~/hooks/useInput';
import { PasswordField, passwordRules } from '../PasswordField/PasswordField';

export const PasswordComparison = () => {
  const password1 = useInput(passwordRules, 'password1');
  const password2 = useInput(passwordRules, 'password2');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (password2 && password2 !== password1) {
      setError("Passwords do not match");
    } else {
      setError(null);
    }
  }, [password1, password2]);

  return (
    <div className="space-y-4">
      <PasswordField
        name="password1"
        label="Password"
        required
        showForgotPassword={false}
      />

      <PasswordField
        name="password2"
        label="Confirm Password"
        required
        showForgotPassword={false}
      />

      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}
    </div>
  );
};