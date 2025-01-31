import { Outlet } from 'react-router';
import styles from './layout.module.css';

export default function AuthLayout() {
  return (
    <div className={styles.authLayout}>
      <section className={styles.authCard}>
        <Outlet />
      </section>
    </div>
  );
}
