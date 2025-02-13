import { useEffect, useState } from 'react';
import { PasswordField, passwordRules } from '~/components/Password/PasswordField/PasswordField';
import { usePasswordValidation } from '~/hooks/usePasswordValidation';

const Register = () => {
  const password1 = usePasswordValidation();
  const password2 = usePasswordValidation();
  const [matchError, setMatchError] = useState<string | null>(null);

  // Basic validation check
  useEffect(() => {
    if (password2.value && password1.value !== password2.value) {
      setMatchError("Passwords do not match");
    } else {
      setMatchError(null);
    }
  }, [password1.value, password2.value]);

  return (
    <div className="space-y-4 w-full flex flex-col gap-4">
      <PasswordField
        name="password1"
        label="Password"
        value={password1.value}
        onChange={password1.onChange}
        error={password1.error}
      />

      <PasswordField
        name="password2"
        label="Confirm Password"
        value={password2.value}
        onChange={password2.onChange}
        error={password2.error || matchError}
      />
    </div>
  );
};

export default Register;