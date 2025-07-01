import React from 'react';
import { BoxProps } from '@shopify/restyle';
import { Theme } from '../../theme';
type Props<T> = {
  /** Radio Group items (item:{ label: string; value: T; }) */
  items: Array<{
    label: string;
    value: T;
  }>;
  /** Radio Group value */
  value: T;
  /** OnChange function */
  onChange: (newValue: T) => void;
  /** Radio size */
  size?: number;
  /** Inline radio group */
  inline?: boolean;
} & BoxProps<Theme>;
export declare const RadioGroup: <T>({
  items,
  value,
  onChange,
  size,
  inline,
  ...props
}: Props<T>) => React.JSX.Element;
export {};
