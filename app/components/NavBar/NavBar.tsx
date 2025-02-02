import { NavLink } from "react-router";
import styles from "./NavBar.module.css";

const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? `${styles.link} ${styles.activeLink}` : styles.link;

function NavBar() {
  return (
    <footer className={styles.footer}>
      <h1 title="useInput" className={styles.title}>
        useInput
      </h1>
      <nav className={styles.nav}>
        <NavLink to="/" className={getNavLinkClass}>
          Home
        </NavLink>
        <NavLink to="/register" className={getNavLinkClass}>
          Register
        </NavLink>
        <NavLink to="/test" className={getNavLinkClass}>
          Test
        </NavLink>
        <NavLink to="/login" className={getNavLinkClass}>
          Login
        </NavLink>
      </nav>
    </footer>
  );
}

export default NavBar;