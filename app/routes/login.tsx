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

/**
 * Processes a login request by extracting and validating form data.
 *
 * Retrieves the email and password from the request's form data, checks for their presence,
 * validates the formats using designated validation functions, and then compares the credentials
 * against preset values. Returns an error response if any validations fail or if the credentials
 * do not match; otherwise, returns a success response with the validated data.
 *
 * @param request - The request object containing the incoming form data.
 * @returns A promise that resolves with an action response containing either success data or an error object.
 *
 * @example
 * const response = await action({ request });
 * if (response.error) {
 *   // Handle error: missing fields, invalid formats, or incorrect credentials.
 * } else {
 *   // Process successful login with data from response.
 * }
 *
 * @remarks
 * Error responses utilize constants from the AUTH_ERROR module for consistency. The function
 * handles missing field errors, format validation failures, authentication mismatches, and unexpected
 * server errors by returning respective error responses.
 */
export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');

  // Check for empty fields first
  const errors: Record<string, string> = {};
  if (!email) {
    errors.email = AUTH_ERROR.EMAIL_REQUIRED;
  }
  if (!password) {
    errors.password = AUTH_ERROR.PASSWORD_REQUIRED;
  }

if (Object.keys(errors).length > 0) {
  return createActionResponse.error(errors);
}

  // Then validate format if fields are present
  const result = validateFormData(formData, {
    email: isEmail,
    password: validatePassword
  });

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