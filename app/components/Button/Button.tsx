import type { ReactButton, ReactNode } from '~/types';
import styles from './Button.module.css';

type ButtonProps = {
  children: ReactNode;
} & ReactButton;

const Button = ({
  type = 'button',
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={styles.button}
      {...props}
    >
      {children}
    </button>
  );
};

Button.displayName = 'Button';

export { Button };
export type { ButtonProps };
