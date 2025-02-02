import { Link } from "react-router";
import styles from "./LinkToRegister.module.css";

export const LinkToRegister = () => {
  return (
    <div className={styles.linkToRegister}>
      <p>Don't have an account?</p>
      <Link to="/register">
        Sign Up
      </Link>
    </div>
  );
};

LinkToRegister.displayName = "LinkToRegister";