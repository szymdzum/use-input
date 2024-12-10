/**
 * Email Input Components and Utilities
 * @module Email
 */

/**
 * Component Export
 * @see {@link Email} - Email input component
 */
export { Email } from './Email';

/**
 * Validator Exports
 * @see {@link validateEmail} - Basic email format validation
 * @see {@link validateEmailStrict} - Strict email format validation
 * @see {@link emailWithDomain} - Domain-specific email validation
 */
export { validateEmail, validateEmailStrict } from './validators';

/**
 * Type Exports
 * @see {@link EmailProps} - Props for Email component
 */
export type { EmailProps } from './Email';

/**
 * Configuration Export
 * @see {@link EMAIL_REGEX} - Email validation regex
 */
export { EMAIL_REGEX } from "./validators"; 