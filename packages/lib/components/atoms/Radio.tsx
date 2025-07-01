import { createBox } from '@shopify/restyle';
import React from 'react';
import { Pressable, PressableProps } from 'react-native';

import { Theme } from '../../theme';
import { Box } from './Box';
import { Text } from './Text';

const Button = createBox<Theme, PressableProps>(Pressable);

export type RadioProps = {
  checked?: boolean;
  size?: number;
  label: string;
  inline?: boolean;
  onChange: () => void;
} & React.ComponentProps<typeof Button>;

export const Radio = ({
  checked,
  size = 24,
  inline = true,
  label,
  onChange,
  ...boxProps
}: RadioProps) => (
  <Button
    onPress={onChange}
    flexDirection="row"
    alignItems="center"
    role="radio"
    accessibilityRole="radio"
    {...boxProps}>
    <Box
      height={size}
      width={size}
      borderRadius={size / 2}
      justifyContent="center"
      alignItems="center"
      backgroundColor="formBackground"
      borderWidth={checked ? 2 : 1}
      borderColor={checked ? 'brandSolid' : 'formBorder'}
      marginRight="s">
      {checked && (
        <Box
          height={size * 0.58}
          width={size * 0.58}
          borderRadius={(size * 0.58) / 2}
          backgroundColor="brandSolid"
        />
      )}
    </Box>

    <Box flex={inline ? undefined : 1}>
      <Text color={checked ? 'textPrimary' : 'textSecondary'}>{label}</Text>
    </Box>
  </Button>
);
