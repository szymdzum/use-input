import { Submit } from '~/components/Button/Button';
import { Form, validateFormData } from '~/components/Form';
import { PasswordField, passwordRules } from '~/components/Password/PasswordField';
import { EmailField } from '~/modules/EmailField';
import { TextDivider } from '~/modules/auth/Dividers/Dividers';
import { FormHeader } from '~/modules/auth/FormHeader';
import { LinkToRegister } from '~/modules/auth/LinkToRegister/LinkToRegister';
import { isEmail } from '~/modules/validation';
import type { Route } from './+types/Login';
import styles from './Login.module.css';

export async function action({
  request,
}: Route.ActionArgs) {
  const formData = await request.formData();
  const result =  validateFormData(formData,
    { email: isEmail, password: passwordRules }
  );
  return result;
}

export default function Login({ actionData }: Route.ComponentProps) {
  console.log(actionData);

  return (
   <section className={styles.card}>
     <FormHeader>Sign In</FormHeader>
     <Form>
        <EmailField />
        <PasswordField />
        <TextDivider>
          and click the button
        </TextDivider>
       <Submit className="submitButton">
         Sign In
       </Submit>
       <LinkToRegister />
     </Form>
   </section>
  );
}
