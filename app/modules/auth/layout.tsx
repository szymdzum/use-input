import { Outlet } from 'react-router';
import styles from './layout.module.css';

import type { ReactElement } from '~/types/react';

export default function AuthLayout(): ReactElement {

  return (
    <div className={styles.authLayout}>
      <section className={styles.authCard}>
        <Outlet />
      </section>
    </div>
  );
}
