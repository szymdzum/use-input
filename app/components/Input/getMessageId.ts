type MessageType = {
  error: string | null;
  helper?: string;
  id: string;
};

/**
 * Generates an accessibility ID for error or helper messages
 * @param {MessageType} params - Configuration object
 * @param {string | null} params.error - Error message if present
 * @param {string} [params.helper] - Optional helper text
 * @param {string} params.id - field id
 * @returns {string | undefined} message ID or undefined
 * const messageId = getMessageId({ id, error, helper });
 * // Returns: 'email-error' or 'email-helper'
 */
export const getMessageId = ({
  error,
  helper,
  id,
}: MessageType): string | undefined => {
  if (error) return `${id}-error`;
  if (helper) return `${id}-helper`;
  return undefined;
};
