export type Validator = (value: string) => string | null;

export function createFormSchema<T extends string>(
  schema: Record<T, Validator>
) {
  return schema;
}
