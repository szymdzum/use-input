import { Link } from 'react-router';
import type { Route } from './+types/home';
import '../styles/home.css';

export function meta(_: Route.MetaArgs) {
  return [
    { title: 'useInput - Modern Form Validation for React Router' },
    { name: 'description', content: 'Progressive enhancement form validation library following web standards' },
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
        <h1>useInput</h1>
        <p className="hero-text">
          A modern form validation library for React Router that embraces web standards
          and progressive enhancement.
        </p>
        <div className="cta-buttons">
          <Link to="/login" className="cta-primary">Try Demo</Link>
          <a href="https://github.com/your-repo" className="cta-secondary">View on GitHub</a>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Progressive Enhancement</h3>
            <p>Works without JavaScript, enhances with it. Server-side validation first, client-side for better UX.</p>
          </div>
          <div className="feature-card">
            <h3>Web Standards</h3>
            <p>Built on HTML5 form validation and ARIA attributes. Follows best practices for accessibility.</p>
          </div>
          <div className="feature-card">
            <h3>React Router Integration</h3>
            <p>Seamlessly works with React Router's form handling and server actions.</p>
          </div>
        </div>
      </section>

      {/* Example Section */}
      <section className="example">
        <h2>Simple to Use</h2>
        <pre className="code-block">
          <code>{`const EmailField = () => {
  const { inputProps, error } = useInput({
    name: "email",
    label: "Email",
    validation: isEmail
  });

  return <Input {...inputProps} error={error} />;
};`}</code>
        </pre>
      </section>

      {/* Server Value Section */}
      <section className="server-value">
        <p>Server Value: {loaderData.message}</p>
      </section>
    </div>
  );
}