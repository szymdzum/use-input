import { useRef } from 'react';
import { Form as BaseForm, type FormProps as BaseFormProps } from 'react-router';
import { ErrorBoundary } from '../ErrorBoundary';

import type React from 'react';
import type { ErrorInfo } from 'react';

export function useForm() {
  const formRef = useRef<HTMLFormElement>(null);

  return {
    ref: formRef as React.RefObject<HTMLFormElement>,
    getElement: (name: string) =>
      formRef.current?.elements.namedItem(name) ?? null,
    getElements: () => formRef.current?.elements,
    getElementNames: () => {
      const elements = formRef.current?.elements;
      if (!elements) {
        console.error('No elements found');
        return [];
      }
     return Array.from(elements)
      .map((element) => (element as HTMLInputElement).name)
      .filter(Boolean);
    },

  };
}

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
  ref?: React.RefObject<HTMLFormElement>;
};

const Form = ({
  method = 'POST',
  noValidate = false,
  ref,
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
    <BaseForm
      ref={ref}
      method={method}
      noValidate={noValidate}
      {...props}
    />
  </ErrorBoundary>
);

Form.displayName = 'Form';

export { Form };
export type { FormProps };
