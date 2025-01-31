import { EmailField } from '~/ui/EmailField';
import { TextField } from '~/ui/TextField';
import { UsernameField } from '~/ui/UsernameField';
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
      <TextField />
      <UsernameField />
      <EmailField />
    </div>
  );
}