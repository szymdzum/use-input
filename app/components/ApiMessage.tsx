import { Link } from 'react-router';
import '../styles/api-message.css';

type ApiMessageProps = {
  message: string;
  linkText?: string;
  linkTo?: string;
  className?: string;
};

export function ApiMessage({ message, linkText, linkTo, className }: ApiMessageProps) {
  return (
    <div className={`api-message ${className ?? ''}`} role="alert">
      {message === 'Invalid email or password' ? (
        <>
          Account not found. Would you like to{' '}
          <Link to={linkTo ?? '/register'} className="api-message-link">
            {linkText ?? 'create an account'}
          </Link>
          ?
        </>
      ) : (
        message
      )}
    </div>
  );
}