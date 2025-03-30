import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('inputs', 'routes/inputs.tsx'),
  route('test', 'routes/test.tsx'),
  route('login', 'routes/login.tsx'),

] satisfies RouteConfig;
