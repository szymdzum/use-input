import { Stars } from 'lucide-react';
import { Outlet } from 'react-router';
import type { ReactElement } from '~/types/react';
import styles from './layout.module.css';

export default function AuthLayout(): ReactElement {

  return (
        <div className={styles.twoColumnGrid}>
            <div className={styles.formWrapper}>
              <Outlet />
            </div>
          <div className={styles.starsSection}>
            <Stars />
          </div>
        </div>
  );
}
