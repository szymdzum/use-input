import type { ReactButton, ReactNode } from '~/types/react';
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

export const PrimaryButton = ({ children, ...props }: ButtonProps) => {
  return (
    <Button type="submit" className={styles.primaryButton} {...props}>
      {children}
    </Button>
  );
};
