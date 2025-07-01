import React from 'react';
import { ToastConfig } from 'react-native-toast-message';
import { Theme } from './theme';
type Props = {
  /** Theme object created with `createApexTheme()` or provided.*/
  theme: Theme;
  /** Callback to be called when initial bootstrap is finished. */
  onBootstrapFinish?: () => void;
  /** Config for toast (see `react-native-toast-message` package) */
  toastConfig?: ToastConfig;
  /** API endpoints configuration */
  children: React.ReactNode | React.ReactNode[];
};
export declare const ApexProvider: React.MemoExoticComponent<
  ({
    theme,
    onBootstrapFinish,
    toastConfig,
    children,
  }: Props) => React.JSX.Element
>;
export {};
