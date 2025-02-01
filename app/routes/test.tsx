import type { ReactElement } from '~/types/react';

import { EmailValidator, booleanValidator, numberValidator } from '~/types/validators';

export default function Test(): ReactElement {
  const correct = EmailValidator.validate('test@test.com');
  const incorrect = EmailValidator.validate('test@test');

  console.log('correct', correct);
  console.log('incorrect', incorrect);

  const booleanResult = booleanValidator("hello");
  console.log('booleanResult', booleanResult);

  const numberResult = numberValidator(666);
  console.log('numberResult', numberResult);

  return <div>Test</div>;
}
