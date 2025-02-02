import { type RouteConfig, index, layout, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('test', 'routes/test.tsx'),

  layout('./modules/auth/Layout/Layout.tsx', [
    route('login', './modules/auth/Login/Login.tsx'),
    route('register', './modules/auth/Register/Register.tsx'),
  ]),
] satisfies RouteConfig;
