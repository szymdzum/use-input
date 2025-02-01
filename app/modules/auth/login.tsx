import { PrimaryButton } from '~/components/Button/Button';
import { Form, validateFormData } from '~/components/Form';
import { useForm } from '~/components/Form/Form';
import { PasswordField, passwordRules } from '~/components/Password/PasswordField';
import { EmailField } from '~/modules/EmailField';
import { isEmail, usernameRules } from '~/modules/validation';

import type { ReactNode } from 'react';
import { Link } from 'react-router';
import type { Route } from './+types/login';
import styles from './layout.module.css';
export async function action({
  request,
}: Route.ActionArgs) {
  const formData = await request.formData();
  const result =  validateFormData(formData, { email: isEmail, password: passwordRules });
  return result;
}

export default function Login({ actionData }: Route.ComponentProps) {
  console.log(actionData);

  const form = useForm();
  return (
   <section className={styles.authCard}>
   <h2>Sign In</h2>
  <div className={styles.divider} />
      <Form ref={form.ref}>
        <EmailField />
        <PasswordField  />
        <TextDivider> and click the button</TextDivider>
        <PrimaryButton type="submit">
          Sign In
        </PrimaryButton>
        <RegistrationURL />
      </Form>
    </section>
  );
}


const RegistrationURL = () => {
  return (
    <div className={styles.registrationURL}>
      <p>Don't have an account?</p>
      <Link to="/register">
        Sign In
      </Link>
    </div>
  );
};

const TextDivider = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.dividerWithText}>
      <span className={styles.dividerText}>
        {children}
      </span>
    </div>
  )
}
