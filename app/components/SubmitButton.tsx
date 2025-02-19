import clsx from 'clsx';
import { Loader2 } from 'lucide-react';
import { useNavigation } from 'react-router';

type SubmitButtonProps = {
  label: string;
};

export function SubmitButton({ label }: Readonly<SubmitButtonProps>) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  const buttonContent = isSubmitting ? (
    <>
      <Loader2 className="submit-spinner" size={16} />
      <span>Signing in...</span>
    </>
  ) : (
    <span>{label}</span>
  );

  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className={clsx('submit-button', {
        'submit-button-loading': isSubmitting
      })}
    >
      {buttonContent}
    </button>
  );
}