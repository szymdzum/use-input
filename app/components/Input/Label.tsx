import { type ReactElement, type ReactNode, memo } from 'react';

type LabelProps = {
  htmlFor: string;
  children: ReactNode;
  required?: boolean;
};

export const Label = memo(({
  htmlFor,
  children,
  required
}: LabelProps): ReactElement => (
  <label htmlFor={htmlFor}>
    {children}
    {required && <span aria-hidden="true">*</span>}
  </label>
));

Label.displayName = 'Label';