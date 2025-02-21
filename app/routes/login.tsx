import type { ActionFunctionArgs, HeadersFunction } from 'react-router';
import { ApiMessage } from '~/components/ApiMessage';
import { Form, validateFormData } from '~/components/Form';

import type { ValidationResult } from '~/components/Form/validateFormData';
import { LoginFooter } from '~/components/LoginFooter';
import { SubmitButton } from '~/components/SubmitButton';
import { EmailField } from '~/modules/EmailField';
import { PasswordField, validatePassword } from '~/modules/PasswordField';
import { isEmail } from '~/modules/validation';
import { createActionResponse } from '~/utils/actionResponse';
import { AUTH_ERROR } from '../constants/errors';

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const result = validateFormData(formData, {
    email: isEmail,
    password: validatePassword
  });
  console.log(result);
  if (!result.success) {
      return createActionResponse.error(result.errors);
  }

  try {
    if (result.data.email !== 'test@example.com' || result.data.password !== 'Password123!') {
        return createActionResponse.error({ auth: AUTH_ERROR.INVALID_CREDENTIALS });
    }

    return createActionResponse.success(result.data);
  } catch (error) {
    console.error('Login error:', error);

      return createActionResponse.error({ auth: AUTH_ERROR.SERVER_ERROR });
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