import { Submit } from '~/components/Button/Button';
import { Form, validateFormData } from '~/components/Form';
import { PasswordField, passwordRules } from '~/components/Password/Password';
import { Title } from '~/components/Title/Title';
import { EmailField } from '~/modules/EmailField';
import { isEmail } from '~/modules/validation';

import type { ReactNode } from 'react';
import { Link } from 'react-router';
import type { Route } from './+types/login';
import styles from './layout.module.css';

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
   <section className={styles.authCard}>
     <Title>Sign In</Title>
     <div className={styles.divider} />
     <Form>
        <EmailField />
        <PasswordField />
        <TextDivider>
          and click the button
        </TextDivider>
       <Submit type="submit">
         Sign In
       </Submit>
       <LinkToRegistration />
     </Form>
   </section>
  );
}

const LinkToRegistration = () => {
  return (
    <div className={styles.registration}>
      <p>Don't have an account?</p>
      <Link to="/register" className={styles.registrationLink}>
        Sign Up
      </Link>
    </div>
  );
};

const TextDivider = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.dividerWrapper}>
      <span className={styles.dividerText}>
        {children}
      </span>
    </div>
  )
}
