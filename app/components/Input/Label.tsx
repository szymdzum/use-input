
type LabelProps = Omit<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  "htmlFor" | "className"
> & {
  id: string;
  label: string;
  className?: string;
};

/**
 * Form label component with consistent styling
 * - Automatically connects to input via htmlFor
 * - Maintains consistent typography and spacing
 * - Supports custom className extensions
 * 
 * @component
 * @param {LabelProps} props - Component props
 * @param {string} props.id - ID of the input this label is connected to
 * @param {string} props.label - Label text content
 * @param {string} [props.className] - Optional additional CSS classes
 * @example
 * <Label 
 *   id="email"
 *   label="Email Address"
 * />
 */

const Label = ({ id, label, className, ...props }: LabelProps) => (
  <label htmlFor={id} {...props}>
    {label}:
  </label>
);

Label.displayName = "Label";

export { Label };
export type { LabelProps };
