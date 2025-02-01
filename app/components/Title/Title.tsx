import type React from 'react';
import styles from './Title.module.css';

type TitleProps = {
  children: React.ReactNode;
  className?: string;
};

export const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <h3 className={styles.h3}>
      {children}
    </h3>
  );
};