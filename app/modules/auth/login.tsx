import { Button } from '~/components/Button/Button';
import { Form, validateFormData } from '~/components/Form';
import { useForm } from '~/components/Form/Form';
import { EmailField } from '~/modules/EmailField';
import { isEmail, usernameRules } from '~/modules/validation';
import { UsernameField } from '../UsernameField';
import type { Route } from './+types/login';

export async function action({
  request,
}: Route.ActionArgs) {
  const formData = await request.formData();
  const result = await validateFormData(formData, { email: isEmail, username: usernameRules });
  return result;
}

export default function Login({ actionData }: Route.ComponentProps) {
  console.log(actionData);

  const form = useForm();
  return (
   <>
      <h3 className="title">Log in or create account</h3>
      <Form noValidate ref={form.ref}>
        <EmailField />
        <UsernameField />
        <Button
          type="submit"
          onClick={() => {
            const elementNames = form.getElementNames();
            const elements = form.getElements();
            console.log('elements:', elements);
            console.log('elementNames:', elementNames);
          }}
        >
          Login
        </Button>
      </Form>
    </>
  );
}
