import React from 'react';
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';

import {
  useTheme,
  composeRestyleFunctions,
  createVariant,
  useRestyle,
  VariantProps,
  boxRestyleFunctions,
} from '@shopify/restyle';
import { Box, Text, TouchableOpacity } from '../atoms';
import { Theme } from '../../theme';

type RestyleProps = VariantProps<Theme, 'buttonVariants'> &
  React.ComponentProps<typeof TouchableOpacity>;
type ThemeColors = keyof Theme['colors'];

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  createVariant<Theme, 'buttonVariants'>({ themeKey: 'buttonVariants' }),
  // @ts-ignore
  ...boxRestyleFunctions,
]);

type PrefixedUnion<T, prefix extends string> = T extends 'defaults'
  ? never
  : T extends string
  ? `${prefix}${T}`
  : never;
type TextVariants = PrefixedUnion<keyof Theme['buttonVariants'], 'button_'>;

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

export const Button = ({
  label,
  disabled = false,
  loading = false,
  size = 'big',
  onPress,
  variant = 'primary',
  icon,
  iconSpacing = 's',
  ...rest
}: ButtonProps) => {
  const theme = useTheme<Theme>();

  // @ts-ignore
  const props = useRestyle(restyleFunctions, {
    variant,
    borderRadius: 6,
    flexDirection: 'row' as const,
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
    alignSelf: size === 'small' ? ('center' as const) : ('auto' as const),
    opacity: disabled ? 0.4 : 1,
    height: size === 'big' ? 44 : 36,
    width: !label ? (size === 'big' ? 44 : 36) : undefined,
    ...rest,
  });

  const textVariant = ('button_' + variant) as TextVariants;
  const existingVariant = textVariant in theme.textVariants;
  const textVariantConfig = theme.textVariants[textVariant];
  const textColor: ThemeColors =
    'color' in textVariantConfig
      ? (textVariantConfig.color as ThemeColors)
      : ('textPrimary' as const);

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      accessible
      accessibilityRole="button"
      accessibilityLabel={typeof label === 'string' ? label : undefined}
      {...props}>
      {loading ? (
        <ActivityIndicator size="small" color={textColor} />
      ) : (
        <>
          {icon ? (
            <Box mr={label ? iconSpacing : undefined}>{icon}</Box>
          ) : undefined}
          {typeof label === 'string' ? (
            <Text variant={existingVariant ? textVariant : undefined}>
              {label}
            </Text>
          ) : (
            label
          )}
        </>
      )}
    </TouchableOpacity>
  );
};
