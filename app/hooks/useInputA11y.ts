type A11yConfig = {
  error: string | null;
  required?: boolean;
  description?: string;
  hint?: string;
};

export const useInputA11y = (name: string, config: A11yConfig) => {
  const describedByIds = [
    config.error && `${name}-error`,
    config.description && `${name}-description`,
    config.hint && `${name}-hint`
  ].filter(Boolean).join(' ');

  return {
    inputProps: {
      id: `input-${name}`,
      'aria-invalid': Boolean(config.error),
      'aria-required': config.required,
      'aria-describedby': describedByIds || undefined,
    },
    labelProps: {
      id: `label-${name}`,
      htmlFor: `input-${name}`,
    },
    descriptionProps: config.description ? {
      id: `${name}-description`,
    } : undefined,
    errorProps: config.error ? {
      id: `${name}-error`,
      role: 'alert',
    } : undefined,
    hintProps: config.hint ? {
      id: `${name}-hint`,
    } : undefined,
  };
};