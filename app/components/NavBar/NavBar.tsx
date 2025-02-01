import { NavLink } from "react-router";
import styles from "./NavBar.module.css";
function NavBar() {
  return (
      <footer className={styles.footer}>
      <h1 title="useInput">useInput</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/test">Test</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
    </footer>
  );
}

export default NavBar;