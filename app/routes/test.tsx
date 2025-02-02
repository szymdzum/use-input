import type { ReactElement } from '~/types/react';

import { EmailValidator, booleanValidator, nonEmptyString, numberValidator } from '~/types/validators';

export default function Test(): ReactElement {
  const correct = EmailValidator.validate('test@test.com');
  const incorrect = EmailValidator.validate('test@test');

  console.log('correct', correct);
  console.log('incorrect', incorrect);

  const booleanResult = booleanValidator("hello");
  console.log('booleanResult', booleanResult);

  const numberResult = numberValidator(666);
  console.log('numberResult', numberResult);

  const stringResult = nonEmptyString.validate("hello");
  console.log('stringResult', stringResult);

  const stringResult2 = nonEmptyString.validate("");
  console.log('stringResult2', stringResult2);

  const stringResult3 = nonEmptyString.validate(null);
  console.log('stringResult3', stringResult3);

  return <div>Test</div>;
}
