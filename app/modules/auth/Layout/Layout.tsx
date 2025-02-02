import { Stars } from 'lucide-react';
import { Outlet } from 'react-router';
import type { ReactElement } from '~/types/react';
import type { Route } from './+types/Layout';
import styles from './Layout.module.css';

export default function Layout(): ReactElement {
  return (
    <div className={styles.columnGrid}>
      <div className={styles.formWrapper}>
        <Outlet />
      </div>
      <div className={styles.starsSection}>
        <Stars />
      </div>
    </div>
  );
}

Layout.displayName = "Layout";
