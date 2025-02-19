import { ApiMessage } from '~/components/ApiMessage';
import { Form, createServerError, validateFormData } from '~/components/Form';
import type { ValidationResult } from '~/components/Form/validateFormData';
import { LoginFooter } from '~/components/LoginFooter';
import { SubmitButton } from '~/components/SubmitButton';
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

  try {
    if (result.data.email !== 'test@example.com' || result.data.password !== 'Password123!') {
      return createServerError('Invalid email or password', 401);
    }

    return {
      success: true,
      data: result.data
    };
  } catch (error) {
    console.error('Login error:', error);

    if (error instanceof Error) {
      return createServerError(error.message, 500);
    }

    return createServerError('An unexpected error occurred during login', 500);
  }
}

type LoginFormProps = {
  actionData: ValidationResult<{ email: string; password: string }> | undefined;
};

export default function Login({ actionData }: LoginFormProps) {

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
        <Form method="POST" noValidate>
          <EmailField />
          <PasswordField />
          <SubmitButton label="Sign In" />
        </Form>
        <LoginFooter />
      </div>
    </div>
  );
}