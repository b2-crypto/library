import React from 'react';
export declare const OPTIONS: readonly ['system', 'dark', 'light'];
type Props = {
  /** Current theme value */
  value: string;
  /** Callback on change theme */
  onChange: (value: string) => void;
};
export declare const ThemeCard: ({
  value,
  onChange,
}: Props) => React.JSX.Element;
export {};
