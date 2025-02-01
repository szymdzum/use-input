import type React from 'react';
import styles from './Title.module.css';

type TitleProps = {
  children: React.ReactNode;
  className?: string;
};

export const Title: React.FC<TitleProps> = ({ children, className = '' }) => {
  return (
    <h2 className={`${styles.title} ${className}`}>
      {children}
    </h2>
  );
};