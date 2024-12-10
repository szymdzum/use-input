export type InputFocus = React.FocusEvent<HTMLInputElement>;
export type InputChange = React.ChangeEvent<HTMLInputElement>;
export type TextAreaFocus = React.FocusEvent<HTMLTextAreaElement>;
export type SelectFocus = React.FocusEvent<HTMLSelectElement>;

export type Validator = (value: string) => string | null;
