import { TextField } from '~/ui/TextInput/TextInput';
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
      <TextField
        name="username"
        label="Username"
        validator={(value: string) =>
          value.length < 3 ? 'Username too short' : null
        }
        description="Must be at least 3 characters long"
        placeholder="Enter username"
      />
    </div>
  );
}