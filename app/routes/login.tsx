import { Link } from 'react-router';
import { Submit } from '~/components/Button/Button';
import { Form, validateFormData } from '~/components/Form';
import { EmailField } from '~/modules/EmailField';
import { PasswordField } from '~/modules/PasswordField';
import '../styles/login.css';
import { validatePassword } from '~/modules/PasswordField';
import { isEmail } from '~/modules/validation';
import type { Route } from './+types/login';
export async function action({
  request,
}: Route.ActionArgs) {
  const formData = await request.formData();
  const result =  validateFormData(formData,
    { email: isEmail, password: validatePassword }
  );
  return result;
}

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Welcome Back</h1>
        <Form noValidate>
          <EmailField />
          <PasswordField />
          <Submit>Sign In</Submit>
        </Form>
        <div className="login-footer">
          <p>
            Don't have an account? <Link to="/register">Sign up</Link>
          </p>
          <Link to="/forgot-password">Forgot password?</Link>
        </div>
      </div>
    </div>
  );
}