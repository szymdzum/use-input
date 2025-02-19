import { Link } from 'react-router';
import '../styles/header.css';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          {/* Logo/Brand */}
          <Link to="/">Your Brand</Link>

          {/* Main Navigation */}
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>

          {/* Auth/User Section */}
          <div className="user-actions">
            <ThemeToggle />
            <Link to="/login">
              <span className="sr-only">Login</span>
              👤
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button type="button" className="mobile-menu">
            <span className="sr-only">Open menu</span>
            ☰
          </button>
        </nav>
      </div>
    </header>
  );
}