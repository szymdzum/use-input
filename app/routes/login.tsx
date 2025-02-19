import type { ActionFunctionArgs, HeadersFunction } from 'react-router';
import { ApiMessage } from '~/components/ApiMessage';
import { Form, validateFormData } from '~/components/Form';
import type { ValidationResult } from '~/components/Form/validateFormData';
import { LoginFooter } from '~/components/LoginFooter';
import { SubmitButton } from '~/components/SubmitButton';
import { EmailField } from '~/modules/EmailField';
import { PasswordField, validatePassword } from '~/modules/PasswordField';
import { isEmail } from '~/modules/validation';
import { createResponse } from '~/utils/response';

export const headers: HeadersFunction = () => {
  const headers = new Headers();
  headers.set('Content-Type', 'application/json');
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set('Cache-Control', 'no-store, no-cache, must-revalidate');
  headers.set('Pragma', 'no-cache');
  return headers;
};


export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');

  // Check for empty fields first
  const errors: Record<string, string> = {};

  if (!email) {
    errors.email = 'Email is required';
  }

  if (!password) {
    errors.password = 'Password is required';
  }

  if (Object.keys(errors).length > 0) {
    return createResponse({ success: false, errors }, 422);
  }

  // Then validate format if fields are present
  const result = validateFormData(formData, {
    email: isEmail,
    password: validatePassword
  });

  if (!result.success) {
    return createResponse({ success: false, errors: result.errors }, 400);
  }

  try {
    if (result.data.email !== 'test@example.com' || result.data.password !== 'Password123!') {
      return createResponse({ success: false, error: 'Invalid email or password' }, 401);
    }

    return createResponse({ success: true, data: result.data });
  } catch (error) {
    console.error('Login error:', error);

    return createResponse({
      success: false,
      error: error instanceof Error ? error.message : 'An unexpected error occurred'
    }, 500);
  }
}

type LoginFormProps = {
  actionData: ValidationResult<{ email: string; password: string }> | undefined;
};

export default function Login({ actionData }: Readonly<LoginFormProps>) {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Welcome Back</h1>
        {actionData && 'error' in actionData && (
          <ApiMessage
            message={actionData.error as string}
            className="error-message"
          />
        )}
        <Form>
          <EmailField />
          <PasswordField />
          <SubmitButton label="Sign In" />
        </Form>
        <LoginFooter />
      </div>
    </div>
  );
}