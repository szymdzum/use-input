import { type FormEvent, useState } from 'react';
import { Link } from 'react-router';
import { Form, validateFormData } from '~/components/Form';
import { EmailField } from '~/modules/EmailField';
import { PasswordField } from '~/modules/PasswordField';
import { validatePassword } from '~/modules/PasswordField';
import { isEmail } from '~/modules/validation';
import type { Route } from './+types/login';


export async function action({
  request,
}: Route.ActionArgs) {
  const formData = await request.formData();

    const result = validateFormData(formData, {
    email: isEmail,
    password: validatePassword
  });

  if (!result.success) {
    return { errors: result.errors };
  }

  const { email, password } = result.data;
  // ... login logic
  console.log(email, password);
  return { success: true };
}

export default function Login() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    const form = e.currentTarget as HTMLFormElement;

    // Check for required fields
    const requiredFields = form.querySelectorAll('[required]');
    let hasEmptyRequired = false;

    for (const field of requiredFields) {
      if (!(field as HTMLInputElement).value) {
        hasEmptyRequired = true;
        (field as HTMLInputElement).focus();
        break;
      }
    }

    // Check for error states
    const invalidFields = form.querySelectorAll('[aria-invalid="true"]');

    if (hasEmptyRequired || invalidFields.length > 0) {
      e.preventDefault();
      return;
    }

    setIsSubmitting(true);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Welcome Back</h1>
 <Form method="POST" onSubmit={handleSubmit} noValidate>
          <EmailField />
          <PasswordField />
          <button
            type="submit"
            disabled={isSubmitting}
            className="submit-button"
          >
            {isSubmitting && <span className="spinner" />}
            {isSubmitting ? 'Signing in...' : 'Sign In'}
          </button>
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