import { Outlet } from "react-router"

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
      <section>
        <Outlet />
        <p>{loaderData.message}</p>
      </section>
  );
}