import type { ReactNode } from 'react';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from 'react-router';
import { isRouteErrorResponse, useRouteError } from 'react-router';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

export { links } from './links';
//  you need to make up your mind about the styles
import './styles/variables.css';
import './styles/header.css';
import './styles/input.css';
import './styles/login.css';
import './styles/theme-toggle.css';
import './styles/home.css';
import './styles/error.css';

// Document component to handle the HTML structure
function Document({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

// Layout component for the content structure
function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return (
    <Document>
      <Header />
      <main className="error-container">
        {isRouteErrorResponse(error) ? (
          <div className="error-content">
            <div className="error-meme">
              <img
                src="/images/404-cat.png"
                alt="Confused cat"
                className="error-image"
              />
              <h1 className="error-title">
                4😺4
              </h1>
              <p className="error-message">
                Oops! This page pulled a disappearing act...
                <br />
                <span className="error-subtitle">Just like my motivation to find it!</span>
              </p>
            </div>
          </div>
        ) : error instanceof Error ? (
          <>
            <h1>Error</h1>
            <p>{error.message}</p>
          </>
        ) : (
          <h1>Unknown Error</h1>
        )}
        <div className="error-actions">
          <a href="/" className="error-button">
            Take me back to safety →
          </a>
        </div>
      </main>
    </Document>
  );
}

export default function App() {
  // Only wrap Outlet with Layout once
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}
