import * as React from 'react';
type Props = {
  label: string;
  labelExtra?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  error?: string;
};
export declare const BoxFormItem: ({
  label,
  labelExtra,
  children,
  footer,
  error,
}: Props) => React.JSX.Element;
export {};
