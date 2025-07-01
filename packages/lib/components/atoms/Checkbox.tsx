import React from 'react';
import { Pressable, PressableProps } from 'react-native';
import { createBox, useTheme } from '@shopify/restyle';

import { Box } from './Box';
import { Check } from '../../assets/icons';
import { Theme } from '../../theme';
import { Text } from './Text';

const Button = createBox<Theme, PressableProps>(Pressable);

type Props = {
  checked?: boolean;
  label?: React.ReactNode;
  size?: number;
  disabled?: boolean;
  hasError?: boolean;
  onChange: (checked: boolean) => void;
} & Omit<React.ComponentProps<typeof Button>, 'onPress'>;

export const Checkbox = ({
  checked = false,
  label,
  onChange,
  size = 28,
  disabled = false,
  hasError = false,
  'aria-label': ariaLabel,
  ...props
}: Props) => {
  const { colors } = useTheme<Theme>();

  return (
    <Button
      onPress={() => onChange(!checked)}
      flexDirection="row"
      alignItems="center"
      role="checkbox"
      accessible
      accessibilityRole="checkbox"
      aria-label={
        ariaLabel || (typeof label === 'string' && label) || 'checkbox'
      }
      disabled={disabled}
      {...props}>
      <Box
        width={size}
        height={size}
        borderRadius={6}
        borderWidth={disabled || checked || hasError ? 2 : 1}
        borderColor={
          hasError
            ? 'error'
            : disabled
            ? 'textSecondary'
            : checked
            ? 'brandSolid'
            : 'formBorder'
        }
        bg="formBackground"
        alignItems="center"
        justifyContent="center"
        mr={label ? 'sm' : undefined}>
        {checked && (
          <Check
            width={size * 0.7}
            height={size * 0.7}
            fill={
              hasError
                ? colors.error
                : disabled
                ? colors.textSecondary
                : colors.brandSolid
            }
          />
        )}
      </Box>
      {!!label && (
        <Box flex={1}>
          <Text color="textSecondary">{label}</Text>
        </Box>
      )}
    </Button>
  );
};
