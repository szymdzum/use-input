import { Outlet } from 'react-router';
import './auth.module.css';

export default function AuthLayout() {
  return (
    <div>
      <h1>AuthLayout</h1>
      <Outlet />
    </div>
  );
}
