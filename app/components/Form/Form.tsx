import { Form as RouterForm } from 'react-router';
import type { FormProps } from 'react-router';

// Handle form error here not in the button please
// funny formatting btw

function Form({
    method = 'POST',
    noValidate = true,
    ...props }: Readonly<FormProps>)
  {
  return <RouterForm
    method={method}
    noValidate={noValidate}
    {...props}
  />;
}

Form.displayName = 'Form';

export { Form };
export type { FormProps };
