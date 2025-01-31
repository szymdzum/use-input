import type { InvalidEvent } from '~/types';

type ValidityError = {
  valueMissing: string;
  typeMismatch: string;
  patternMismatch: string;
  // Add more as needed
};

const defaultErrorMessages: ValidityError = {
  valueMissing: 'This field is required(custom)',
  typeMismatch: 'Please enter a valid format(custom)',
  patternMismatch: 'Please match the requested format(custom)',
};

export const handleInvalid = (
  event: InvalidEvent,
  customMessages?: Partial<ValidityError>
) => {
  const target = event.target;
  const validity = target.validity;
  const messages = { ...defaultErrorMessages, ...customMessages };

  // Get the first failing constraint
    target.setCustomValidity('');
  let errorMessage: string | null = null;

  if (validity.valueMissing) {
    errorMessage = messages.valueMissing;
  } else if (validity.typeMismatch) {
    errorMessage = messages.typeMismatch;
  } else if (validity.patternMismatch) {
    errorMessage = messages.patternMismatch;
  }

   if (errorMessage) {
    target.setCustomValidity(errorMessage);
  }
};

export const clearInputError = (
  target: HTMLInputElement,
) => {
  target.setCustomValidity('');
};
