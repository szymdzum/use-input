import type React from 'react';

export type ReactNode = React.ReactNode;
export type ReactElement = React.ReactElement;

export type InvalidEvent = React.InvalidEvent<HTMLInputElement>;
export type InputFocus = React.FocusEvent<HTMLInputElement>;
export type InputChange = React.ChangeEvent<HTMLInputElement>;
export type TextAreaFocus = React.FocusEvent<HTMLTextAreaElement>;
export type SelectFocus = React.FocusEvent<HTMLSelectElement>;

export type ReactButton = React.ButtonHTMLAttributes<HTMLButtonElement>;
export type SVGIcon = React.SVGProps<SVGSVGElement>;