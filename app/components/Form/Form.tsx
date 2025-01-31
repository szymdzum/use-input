import { Form as BaseForm, type FormProps as BaseFormProps } from 'react-router';
import { ErrorBoundary } from '../ErrorBoundary';

import type React from 'react';
import type { ErrorInfo } from 'react';

type FormProps = {
  method?: 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE';
  noValidate?: boolean;
  children: React.ReactNode;
  /** Custom fallback UI for error boundary */
  errorFallback?: React.ReactNode;
  /** Error handler for component errors */
  onComponentError?: (error: Error, info: ErrorInfo) => void;
  /** Form submission error handler */
  onError?: React.FormEventHandler<HTMLFormElement>;
};

const Form = ({
  method = 'POST',
  noValidate = false,
  ...props
}: FormProps) => (
  <ErrorBoundary
    fallback={
      <div role="alert" aria-live="polite" className="form-error">
        Form submission failed. Please try again.
      </div>
    }
    onError={(error: Error, info: ErrorInfo) =>
      console.error('Form Error:', error, info)
    }
  >
    <BaseForm method={method} noValidate={noValidate} {...props} />
  </ErrorBoundary>
);

Form.displayName = 'Form';

export { Form };
export type { FormProps };
