import { Form as BaseForm } from "react-router";

type FormProps = {
  method?: "POST" | "GET" | "PUT" | "PATCH" | "DELETE";
  noValidate?: boolean;
  children: React.ReactNode;
};

const Form = ({ method = "POST", noValidate = true, ...props }: FormProps) => {
  return <BaseForm method={method} noValidate={noValidate} {...props} />;
};

Form.displayName = "Form";

export { Form };
export type { FormProps };
