import type { ButtonProps } from 'app/types';

const Button = ({ type = 'button', children }: ButtonProps) => {
  return (
    <button
      type={type}
      className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium shadow-sm transition-colors px-4 py-2 bg-slate-900 text-white hover:bg-slate-950"
    >
      {children}
    </button>
  );
};

Button.displayName = 'Button';

export { Button };
export type { ButtonProps };
