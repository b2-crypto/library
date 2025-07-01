import React, { useCallback, useEffect, useRef, useState } from 'react';
import { TextInput, TouchableWithoutFeedback, } from 'react-native';
import { createRestyleComponent, createVariant, textRestyleFunctions, useTheme, } from '@shopify/restyle';
import { Box } from './Box';
import { StyleSheet } from 'react-native';
const restyleFunctions = [
    ...textRestyleFunctions,
    createVariant({
        themeKey: 'textVariants',
    }),
];
export const RestyleInput = createRestyleComponent(
// @ts-ignore
restyleFunctions, TextInput);
export const Input = React.forwardRef(({ size = 'default', placeholder, disabled = false, hasError, prefix, suffix, boxProps, style, onBlur, onFocus, ...inputProps }, ref) => {
    const innerRef = useRef();
    const { colors } = useTheme();
    const [isFocused, setIsFocused] = useState(false);
    useEffect(() => {
        if (typeof ref === 'function' && innerRef.current) {
            ref(innerRef.current);
        }
    }, [ref]);
    const handleBlur = useCallback((e) => {
        setIsFocused(false);
        onBlur?.(e);
    }, [setIsFocused, onBlur]);
    const handleFocus = useCallback((e) => {
        setIsFocused(true);
        onFocus?.(e);
    }, [setIsFocused, onFocus]);
    const onContainerPress = useCallback(() => {
        innerRef.current?.focus();
    }, [innerRef.current]);
    return (<TouchableWithoutFeedback onPress={onContainerPress}>
        <Box flexDirection="row" alignItems="center" bg={disabled ? undefined : 'formBackground'} paddingHorizontal={size === 'small' ? 'xs' : size === 'big' ? 'sm' : 's'} height={size === 'small' ? 38 : 44} borderWidth={1} borderRadius={6} borderColor={hasError
            ? 'error'
            : isFocused && !disabled
                ? 'brandSolid'
                : 'formBorder'} {...(typeof boxProps === 'function'
        ? boxProps({ isFocused })
        : boxProps)}>
          {prefix}
          <RestyleInput ml={!prefix ? 'none' : size === 'small' ? 's' : 'm'} mr={suffix ? (size === 'small' ? 's' : 'm') : 'none'} marginVertical="none" paddingHorizontal="s" variant={size === 'small'
            ? 'bodyReg'
            : size === 'big'
                ? 'subHeadlineReg'
                : undefined} color={disabled ? 'textSecondary' : 'textPrimary'} placeholder={placeholder} onBlur={handleBlur} onFocus={handleFocus} placeholderTextColor={colors.textSecondary} editable={!disabled} style={[styles.input, style]} {...inputProps} ref={innerRef}/>
          {suffix}
        </Box>
      </TouchableWithoutFeedback>);
});
Input.displayName = 'Input';
const styles = StyleSheet.create({
    input: { flexGrow: 1, flex: 1, padding: 0, margin: 0, borderWidth: 0 },
});
