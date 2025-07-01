import React, { ReactNode } from 'react';
type Props = {
  inversed?: boolean;
  children: ReactNode;
  logo: ReactNode;
};
export declare const ConnectionBound: ({
  inversed,
  children,
  logo,
}: Props) =>
  | string
  | number
  | boolean
  | React.JSX.Element
  | Iterable<React.ReactNode>
  | null
  | undefined;
export {};
