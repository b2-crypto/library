import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  createRestyleComponent,
  createVariant,
  TextProps,
  textRestyleFunctions,
  useTheme,
  VariantProps,
} from '@shopify/restyle';

import { Box } from './Box';
import { Theme } from '../../theme';
import { StyleSheet } from 'react-native';

type RestyleInputProps = VariantProps<Theme, 'textVariants'> &
  TextProps<Theme> &
  TextInputProps;

const restyleFunctions = [
  ...textRestyleFunctions,
  createVariant({
    themeKey: 'textVariants',
  }),
];

export const RestyleInput = createRestyleComponent<RestyleInputProps, Theme>(
  // @ts-ignore
  restyleFunctions,
  TextInput,
);

export type InputProps = Omit<RestyleInputProps, 'variant'> & {
  /** Input size ('default' | 'small' | 'big') */
  size?: 'default' | 'small' | 'big';
  /** Input placeholder */
  placeholder?: string;
  /** Shows error state */
  hasError?: boolean;
  /** Input disabled state */
  disabled?: boolean;
  /** Prefix component */
  prefix?: React.ReactNode;
  /** Suffix component */
  suffix?: React.ReactNode;
  boxProps?:
    | Partial<React.ComponentProps<typeof Box>>
    | ((state: {
        isFocused: boolean;
      }) => Partial<React.ComponentProps<typeof Box>>);
};

export const Input = React.forwardRef(
  (
    {
      size = 'default',
      placeholder,
      disabled = false,
      hasError,
      prefix,
      suffix,
      boxProps,
      style,
      onBlur,
      onFocus,
      ...inputProps
    }: InputProps,
    ref: React.ForwardedRef<TextInput>,
  ) => {
    const innerRef = useRef<TextInput>();
    const { colors } = useTheme<Theme>();
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
      if (typeof ref === 'function' && innerRef.current) {
        ref(innerRef.current);
      }
    }, [ref]);

    const handleBlur = useCallback(
      (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setIsFocused(false);
        onBlur?.(e);
      },
      [setIsFocused, onBlur],
    );

    const handleFocus = useCallback(
      (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setIsFocused(true);
        onFocus?.(e);
      },
      [setIsFocused, onFocus],
    );

    const onContainerPress = useCallback(() => {
      innerRef.current?.focus();
    }, [innerRef.current]);

    return (
      <TouchableWithoutFeedback onPress={onContainerPress}>
        <Box
          flexDirection="row"
          alignItems="center"
          bg={disabled ? undefined : 'formBackground'}
          paddingHorizontal={
            size === 'small' ? 'xs' : size === 'big' ? 'sm' : 's'
          }
          height={size === 'small' ? 38 : 44}
          borderWidth={1}
          borderRadius={6}
          borderColor={
            hasError
              ? 'error'
              : isFocused && !disabled
              ? 'brandSolid'
              : 'formBorder'
          }
          {...(typeof boxProps === 'function'
            ? boxProps({ isFocused })
            : boxProps)}>
          {prefix}
          <RestyleInput
            ml={!prefix ? 'none' : size === 'small' ? 's' : 'm'}
            mr={suffix ? (size === 'small' ? 's' : 'm') : 'none'}
            marginVertical="none"
            paddingHorizontal="s"
            variant={
              size === 'small'
                ? 'bodyReg'
                : size === 'big'
                ? 'subHeadlineReg'
                : undefined
            }
            color={disabled ? 'textSecondary' : 'textPrimary'}
            placeholder={placeholder}
            onBlur={handleBlur}
            onFocus={handleFocus}
            placeholderTextColor={colors.textSecondary}
            editable={!disabled}
            style={[styles.input, style]}
            {...inputProps}
            ref={innerRef}
          />
          {suffix}
        </Box>
      </TouchableWithoutFeedback>
    );
  },
);

Input.displayName = 'Input';

const styles = StyleSheet.create({
  input: { flexGrow: 1, flex: 1, padding: 0, margin: 0, borderWidth: 0 },
});
