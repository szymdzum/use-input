import { Link } from "react-router";
import styles from "./LinkToResetPassword.module.css";
export const LinkToResetPassword = () => {
  return (
   <Link to="/reset" className={styles.resetPasswordLink}>
      Forgot password?
    </Link>
  );
};

LinkToResetPassword.displayName = "LinkToResetPassword";