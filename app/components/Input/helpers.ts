const createInputId = () => ({
  id: (name: string) => `input-${name}`,
  errorId: (name: string) => `${name}-error`,
  descriptionId: (name: string) => `${name}-description`,
});

export const useInputIds = (name: string) => {
  const generator = createInputId();
  return {
    inputId: generator.id(name),
    errorId: generator.errorId(name),
    descriptionId: generator.descriptionId(name)
  };
};

export const ariaOn = (error: string | null) => ({
  errorMessage: (errorId: string) => error ? errorId : undefined,
  descriptionBy: (descriptionId: string) => !error ? descriptionId : undefined,
});
