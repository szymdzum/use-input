import { NavLink } from "react-router"
import { EmailField } from '~/modules/EmailField';
import { PasswordField } from "~/modules/PasswordField";
import { TextField } from '~/modules/TextField';
import { UsernameField } from '~/modules/UsernameField';
import type { Route } from './+types/home';


export function meta(_: Route.MetaArgs) {
  return [
    { title: 'use Input' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.SERVER_VALUE };
}

export default function Home({ loaderData }: Route.ComponentProps) {

  return (
    <div>
      <p>{loaderData.message}</p>
      <NavLink to="/login">Login</NavLink>
      <TextField />
      <UsernameField />
      <EmailField />
      <PasswordField name="password" showForgotPassword />
    </div>
  );
}