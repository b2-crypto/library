import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { VariantProps } from '@shopify/restyle';
import { TouchableOpacity } from '../atoms';
import { Theme } from '../../theme';
type RestyleProps = VariantProps<Theme, 'buttonVariants'> &
  React.ComponentProps<typeof TouchableOpacity>;
export type ButtonProps = RestyleProps & {
  /** Label component */
  label?: React.ReactNode;
  /** Disabled state*/
  disabled?: boolean;
  /** Loading state */
  loading?: boolean;
  /** Icon component */
  icon?: React.ReactNode;
  iconSpacing?: keyof Theme['spacing'];
  /** Button size ('small' | 'big') */
  size?: 'small' | 'big';
  /** OnPress function */
  onPress: TouchableOpacityProps['onPress'];
};
export declare const Button: ({
  label,
  disabled,
  loading,
  size,
  onPress,
  variant,
  icon,
  iconSpacing,
  ...rest
}: ButtonProps) => React.JSX.Element;
export {};
