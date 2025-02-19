import clsx from 'clsx';
import { Loader2 } from 'lucide-react';
import type { MouseEvent } from 'react';
import { useNavigation } from 'react-router';

type SubmitButtonProps = {
  label: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  formId?: string;
};

export function SubmitButton({
  label,
  variant = 'primary',
  className,
  formId
}: SubmitButtonProps) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const form = formId
      ? document.getElementById(formId) as HTMLFormElement
      : e.currentTarget.closest('form');

    if (!form) {
      console.error('Form not found');
      return;
    }

    // Check for required fields
    const requiredFields = form.querySelectorAll('[required]');
    let hasEmptyRequired = false;

    for (const field of requiredFields) {
      if (!(field as HTMLInputElement).value) {
        hasEmptyRequired = true;
        (field as HTMLInputElement).focus();
        field.classList.add('input-error');
      }
    }

    // Check for fields with validation errors
    const invalidFields = form.querySelectorAll('[aria-invalid="true"]');

    if (hasEmptyRequired || invalidFields.length > 0) {
      e.preventDefault();
      // Show error message
      const errorMessage = hasEmptyRequired
        ? 'Please fill in all required fields'
        : 'Please fix the validation errors';

      // You can handle this error message display however you prefer
      // For example, using toast or setting form error state
      console.error(errorMessage);
    }
  };

  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className={clsx(
        'submit-button',
        `submit-button-${variant}`,
        { 'submit-button-loading': isSubmitting },
        className
      )}
      onClick={handleClick}
    >
      {isSubmitting && (
        <Loader2 className="submit-spinner" size={16} />
      )}
      <span>
        {isSubmitting ? 'Signing in...' : label}
      </span>
    </button>
  );
}