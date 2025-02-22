import { Link } from 'react-router';
import type { Route } from './+types/home';
import '../styles/home.css';
import { Layers, Shield, Zap } from 'lucide-react';

export function meta(_: Route.MetaArgs) {
  return [
    { title: 'useInput - Modern Form Validation for React Router' },
    { name: 'description', content: 'Progressive enhancement form validation library following web standards' },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.SERVER_VALUE };
}

export default function Home({ loaderData }: Readonly<Route.ComponentProps>) {
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
          <a
            href="https://github.com/szymdzum/use-input"
            className="cta-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <Layers size={24} />
            </div>
            <h3>Progressive Enhancement</h3>
            <p>Works without JavaScript, enhances with it. Server-side validation first, client-side for better UX.</p>
            <a href="/docs/progressive-enhancement" className="feature-link">Learn more →</a>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Shield size={24} />
            </div>
            <h3>Web Standards</h3>
            <p>Built on HTML5 form validation and ARIA attributes. Follows best practices for accessibility.</p>
            <a href="/docs/web-standards" className="feature-link">Learn more →</a>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Zap size={24} />
            </div>
            <h3>React Router Integration</h3>
            <p>Seamlessly works with React Router's form handling and server actions.</p>
            <a href="/docs/router-integration" className="feature-link">Learn more →</a>
          </div>
        </div>
      </section>

      {/* Example Section */}
      <section className="example">
        <h2>Build Accessible Forms Effortlessly</h2>
        <pre className="code-block">
          <code>{`const EmailField = () => {
  const {
    value,
    error,
    touched,
    inputProps,
    labelProps,
    descriptionProps,
    errorMessageProps
  } = useInput({
    name: "email",
    label: "Email Address",
    description: "We'll never share your email",
    validation: isEmail,
    required: true
  });

  return (
    <div className="field-wrapper">
      <label {...labelProps}>
        {labelProps.children}
        {inputProps.required && <span aria-hidden="true">*</span>}
      </label>

      <input
        {...inputProps}
        className={error ? "input-error" : "input"}
      />

      {!error && (
        <div {...descriptionProps} className="description">
          {descriptionProps.children}
        </div>
      )}

      {touched && error && (
        <div {...errorMessageProps} className="error">
          {error}
        </div>
      )}
    </div>
  );
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