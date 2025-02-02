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

export const Submit = ({ children, ...props }: ButtonProps) => {
  return (
    <Button
      type="submit"
      className={styles.submitButton}
       {...props}>
      {children}
    </Button>
  );
};

export default Submit;