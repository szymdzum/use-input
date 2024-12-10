/**
 * Core Input Components
 * @module Input
 */


/**
 * Component Exports
 * @see {@link Input} - Base input component
 * @see {@link Label} - Input label component
 * @see {@link Message} - Error/helper message component
 */
export { Input } from './Input';
export { Label } from './Label';
export { Message } from './Message';

/**
 * Utility Exports
 * @see {@link getMessageId} - Generate accessible message IDs
 * @see {@link useValidator} - Form validation hook
 */
export { getMessageId } from './getMessageId';

/**
 * Type Exports
 * @see {@link InputProps} - Props for Input component
 * @see {@link LabelProps} - Props for Label component
 * @see {@link MessageProps} - Props for Message component
 */
export type { InputProps } from './Input';
export type { LabelProps } from './Label';
export type { MessageProps } from './Message'; 