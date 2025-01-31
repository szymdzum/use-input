import styles from './Input.module.css';
import { useInputIds } from './helpers';

import { type ReactElement, memo } from 'react';
import type { InputMessageProps } from './types';

export const Message = memo(({
  name,
  error,
  description
}: InputMessageProps): ReactElement | null => {

  const ids = useInputIds(name);
  const errorId = ids.errorId;
  const descriptionId = ids.descriptionId;

  if (error) {
    return (
      <div
        role="alert"
        data-error
        id={errorId}
        className={styles.error}
      >
        {error}
      </div>
    );
  }

  if (description) {
    return (
      <div
        id={descriptionId}
        className={styles.description}
      >
        {description}
      </div>
    );
  }

  return null;
});

Message.displayName = 'Message';