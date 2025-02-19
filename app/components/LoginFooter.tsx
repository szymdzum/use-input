import { Link } from 'react-router';

export function LoginFooter() {
  return (
    <div className="login-footer">
      <p>
        Don't have an account? <Link to="/register">Sign up</Link>
      </p>
      <Link to="/forgot-password">Forgot password?</Link>
    </div>
  );
}