import React from 'react';
type AuthScreenProps = {
  /** Optional logo component */
  logo?: React.ReactNode;
  /** Card header */
  headerText: string;
  children: React.ReactNode | React.ReactNode[];
  /** Screen footer */
  footer?: React.ReactNode | React.ReactNode[];
};
export declare const AuthScreen: ({
  logo,
  headerText,
  children,
  footer,
}: AuthScreenProps) => React.JSX.Element;
export {};
