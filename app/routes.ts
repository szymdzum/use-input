import { type RouteConfig, index, layout, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('test', 'routes/test.tsx'),

  layout('./modules/auth/layout.tsx', [
    route('login', './modules/auth/login.tsx'),
    route('register', './modules/auth/register.tsx'),
  ]),
] satisfies RouteConfig;
