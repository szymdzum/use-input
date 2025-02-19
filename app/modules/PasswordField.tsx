import { useState } from 'react';
import { Input } from '~/components/Input';


export const validatePassword = (value: string) => {
  if (!value) {
    return 'Password is required';
  }
  if (value.length < 8) {
    return 'Password must be at least 8 characters long';
  }
  return null;
};

export const PasswordField = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="password-field">
      <Input
        name="password"
        type={showPassword ? 'text' : 'password'}
        label="Password"
        validation={validatePassword}
        required
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="password-toggle"
        aria-label={showPassword ? 'Hide password' : 'Show password'}
      >
        {showPassword ? '👁️' : '👁️‍🗨️'}
      </button>
      <a href="/reset-password" className="forgot-password">
        Forgot password?
      </a>
    </div>
  );
};