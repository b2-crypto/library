import * as React from 'react';
import { ViewStyle } from 'react-native';
import { Theme } from '../../theme';
import { Box } from '../atoms';
export type TabItem<Type> = {
  value: Type;
  label: string;
};
type TabsProps<Type extends string | number> = {
  /** Callback when tab is pressed */
  onChange: (value: Type) => void;
  /** Current selected tab */
  value: Type | Array<Type> | null;
  /** Array of TabItems */
  data?: TabItem<Type>[];
  /** Styles for the container of the tabs */
  containerStyles?: ViewStyle;
  /** Props for the wrapper Box */
  wrapperProps?: React.ComponentProps<typeof Box>;
  /** Type of tabs ('default' | 'pills_wide' | 'pills_narrow')*/
  type?: 'default' | 'pills_wide' | 'pills_narrow';
  /** Color of the active tab */
  activeColor?: keyof Theme['colors'];
  /** Minimum width of the tab */
  tabMinWidth?: number;
  /** Center content */
  centerContent?: boolean;
};
export declare const Tabs: <Type extends string | number>({
  data,
  value,
  onChange,
  containerStyles,
  wrapperProps,
  type,
  activeColor,
  tabMinWidth,
  centerContent,
}: TabsProps<Type>) => React.JSX.Element;
export {};
