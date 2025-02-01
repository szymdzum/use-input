import { NavLink } from "react-router";
import styles from "./NavBar.module.css";
function NavBar() {
  return (
      <header className={styles.header}>
      <h1 title="useInput">useInput</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/test">Test</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
    </header>
  );
}

export default NavBar;