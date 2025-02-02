import type { ReactNode } from 'react';

type FormHeaderProps = {
  children: ReactNode;
  className?: string;
};

export const FormHeader = ({ children }: FormHeaderProps) => {
  return (
    <h3>{children}</h3>
  );
};

FormHeader.displayName = "FormHeader";