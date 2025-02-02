import type { ReactElement, ReactNode } from "react";
import styles from "./Dividers.module.css";


export const Dividers = (): ReactElement => {
  return (
    <div className={styles.dividers}>
      <p>or</p>
    </div>
  );
};

Dividers.displayName = "Dividers";

export const Divider = () => {
  return (
     <div className={styles.divider} />
  );
};

Divider.displayName = "Divider";

export const TextDivider = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.dividerWithText}>
      <span className={styles.dividerText}>
        {children}
      </span>
    </div>
  )
}

TextDivider.displayName = "TextDivider";