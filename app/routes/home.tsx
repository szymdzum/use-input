import type { Route } from './+types/home';
import '../styles/home.css';

export function meta(_: Route.MetaArgs) {
  return [
    { title: 'Welcome to Our Site' },
    { name: 'description', content: 'Your modern web solution' },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.SERVER_VALUE };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Our Platform</h1>
        <p className="hero-text">{loaderData.message}</p>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Our Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Feature 1</h3>
            <p>Description of feature 1</p>
          </div>
          <div className="feature-card">
            <h3>Feature 2</h3>
            <p>Description of feature 2</p>
          </div>
          <div className="feature-card">
            <h3>Feature 3</h3>
            <p>Description of feature 3</p>
          </div>
        </div>
      </section>
    </div>
  );
}