import React from 'react';
import { Box } from './Box';
type Props = {
  label?: string;
  error?: string;
  children: React.ReactNode | React.ReactNode[];
} & React.ComponentProps<typeof Box>;
export declare const FormItem: ({
  label,
  error,
  children,
  ...rest
}: Props) => React.JSX.Element;
export {};
