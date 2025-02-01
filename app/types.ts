import type React from 'react';

export type ReactNode = React.ReactNode;
export type ReactElement = React.ReactElement;
export type SVGIcon = React.SVGProps<SVGSVGElement>;
export type ReactButton = React.ButtonHTMLAttributes<HTMLButtonElement>;
export type InvalidEvent = React.InvalidEvent<HTMLInputElement>;
export type InputFocus = React.FocusEvent<HTMLInputElement>;
export type InputChange = React.ChangeEvent<HTMLInputElement>;
export type TextAreaFocus = React.FocusEvent<HTMLTextAreaElement>;
export type SelectFocus = React.FocusEvent<HTMLSelectElement>;

/** The Standard Schema interface. */
/* https://github.com/standard-schema/standard-schema */

export interface StandardSchemaV1<Input = unknown, Output = Input> {
  /** The Standard Schema properties. */
  readonly '~standard': StandardSchemaV1.Props<Input, Output>;
}

export declare namespace StandardSchemaV1 {
  /** The Standard Schema properties interface. */
  export interface Props<Input = unknown, Output = Input> {
    /** The version number of the standard. */
    readonly version: 1;
    /** The vendor name of the schema library. */
    readonly vendor: string;
    /** Validates unknown input values. */
    readonly validate: (
      value: unknown
    ) => Result<Output> | Promise<Result<Output>>;
    /** Inferred types associated with the schema. */
    readonly types?: Types<Input, Output> | undefined;
  }

  /** The result interface of the validate function. */
  export type Result<Output> = SuccessResult<Output> | FailureResult;

  /** The result interface if validation succeeds. */
  export interface SuccessResult<Output> {
    /** The typed output value. */
    readonly value: Output;
    /** The non-existent issues. */
    readonly issues?: undefined;
  }

  /** The result interface if validation fails. */
  export interface FailureResult {
    /** The issues of failed validation. */
    readonly issues: readonly Issue[];
  }

  /** The issue interface of the failure output. */
  export interface Issue {
    /** The error message of the issue. */
    readonly message: string;
    /** The path of the issue, if any. */
    readonly path?: readonly (PropertyKey | PathSegment)[] | undefined;
  }

  /** The path segment interface of the issue. */
  export interface PathSegment {
    /** The key representing a path segment. */
    readonly key: PropertyKey;
  }

  /** The Standard Schema types interface. */
  export interface Types<Input = unknown, Output = Input> {
    /** The input type of the schema. */
    readonly input: Input;
    /** The output type of the schema. */
    readonly output: Output;
  }

  /** Infers the input type of a Standard Schema. */
  export type InferInput<Schema extends StandardSchemaV1> = NonNullable<
    Schema['~standard']['types']
  >['input'];

  /** Infers the output type of a Standard Schema. */
  export type InferOutput<Schema extends StandardSchemaV1> = NonNullable<
    Schema['~standard']['types']
  >['output'];
}
const createSchema = <T>(validate: (value: unknown) => StandardSchemaV1.Result<T>): StandardSchemaV1<T> => ({
  '~standard': {
    version: 1,
    vendor: 'my-lib',
    validate
  }
});

export const stringSchema = createSchema((value: unknown) => {
  if (typeof value !== 'string') {
    return { issues: [{ message: 'This field must be a string.' }] };
  }
  return { value };
});

 //  const result = stringSchema['~standard'].validate(999);