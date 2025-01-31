import { Button } from '~/components/Button/Button';
import { Form } from '~/components/Form';
import { EmailField } from '~/modules/EmailField';

export default function Login() {

  return (
   <>
      <h3 className="title">Log in or create account</h3>
      <Form>
        <EmailField />
        <Button type="submit">Login</Button>
      </Form>
    </>
  );
}
