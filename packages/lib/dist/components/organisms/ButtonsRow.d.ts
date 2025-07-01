import React from 'react';
import { Theme } from '../../theme';
import { Box } from '../atoms';
export type ButtonOptions = {
  label: string;
  Icon: React.ComponentType<{
    color: string;
  }>;
  onPress: () => void;
};
type Props = {
  size: 'small' | 'medium' | 'large';
  itemSpacing?: keyof Theme['spacing'];
  buttons: ButtonOptions[];
} & React.ComponentProps<typeof Box>;
export declare const ButtonsRow: ({
  size,
  buttons,
  itemSpacing,
  ...props
}: Props) => React.JSX.Element;
export {};
