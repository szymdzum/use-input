import clsx from 'clsx';
import { Loader2 } from 'lucide-react';
import { useNavigation } from 'react-router';

 type SubmitButtonProps = {
   label: string;
   loadingText?: string;
 };

export function SubmitButton({
  label,
  loadingText = 'Signing in...'
}: Readonly<SubmitButtonProps>) {
   const navigation = useNavigation();
   const isSubmitting = navigation.state === 'submitting';

   const buttonContent = isSubmitting ? (
     <>
       <Loader2 className="submit-spinner" size={16} />
       <span>{loadingText}</span>
     </>
   ) : (
     <span>{label}</span>
   );

   return (
     <button
       type="submit"
       disabled={isSubmitting}
       aria-label={isSubmitting ? loadingText : label}
       className={clsx('submit-button', {
         'submit-button-loading': isSubmitting
       })}
     >
       {buttonContent}
     </button>
   );
 }