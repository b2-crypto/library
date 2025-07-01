import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme, composeRestyleFunctions, createVariant, useRestyle, boxRestyleFunctions, } from '@shopify/restyle';
import { Box, Text, TouchableOpacity } from '../atoms';
const restyleFunctions = composeRestyleFunctions([
    createVariant({ themeKey: 'buttonVariants' }),
    // @ts-ignore
    ...boxRestyleFunctions,
]);
export const Button = ({ label, disabled = false, loading = false, size = 'big', onPress, variant = 'primary', icon, iconSpacing = 's', ...rest }) => {
    const theme = useTheme();
    // @ts-ignore
    const props = useRestyle(restyleFunctions, {
        variant,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: size === 'small' ? 'center' : 'auto',
        opacity: disabled ? 0.4 : 1,
        height: size === 'big' ? 44 : 36,
        width: !label ? (size === 'big' ? 44 : 36) : undefined,
        ...rest,
    });
    const textVariant = ('button_' + variant);
    const existingVariant = textVariant in theme.textVariants;
    const textVariantConfig = theme.textVariants[textVariant];
    const textColor = 'color' in textVariantConfig
        ? textVariantConfig.color
        : 'textPrimary';
    return (<TouchableOpacity disabled={disabled} onPress={onPress} accessible accessibilityRole="button" accessibilityLabel={typeof label === 'string' ? label : undefined} {...props}>
      {loading ? (<ActivityIndicator size="small" color={textColor}/>) : (<>
          {icon ? (<Box mr={label ? iconSpacing : undefined}>{icon}</Box>) : undefined}
          {typeof label === 'string' ? (<Text variant={existingVariant ? textVariant : undefined}>
              {label}
            </Text>) : (label)}
        </>)}
    </TouchableOpacity>);
};
