import { Form, validateFormData } from '~/components/Form';
import { LoginFooter } from '~/components/LoginFooter';
import { SubmitButton } from '~/components/SubmitButton';
import { EmailField } from '~/modules/EmailField';
import { PasswordField, validatePassword } from '~/modules/PasswordField';
import { isEmail } from '~/modules/validation';
import { createActionResponse } from '~/utils/actionResponse';

import type { ActionFunctionArgs } from 'react-router';
import type { Route } from './+types/login';

const loginSchema = {
  email: isEmail,
  password: validatePassword
};

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const validationResult = validateFormData(formData, loginSchema);

  if (validationResult.status === 'error') {
    return createActionResponse.error(validationResult.errors, 422);
  }

  return createActionResponse.success(validationResult.data);
}

export default function Login({ actionData }: Route.ComponentProps) {
  console.log(actionData);
  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Welcome Back</h1>
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