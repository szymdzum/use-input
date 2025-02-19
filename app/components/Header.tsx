import { Link } from 'react-router';
import { ThemeToggle } from './ThemeToggle';

export const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/" className="brand">useInput</Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/docs">Docs</Link>
          <Link to="/examples">Examples</Link>
          <Link to="/api">API</Link>
        </div>

        <div className="nav-right">
          <ThemeToggle />
          <Link to="/login" className="login-link">
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
};