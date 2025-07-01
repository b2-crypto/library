import React from 'react';
import { Box } from './Box';
import { Text } from './Text';

type Props = {
  label?: string;
  error?: string;
  children: React.ReactNode | React.ReactNode[];
} & React.ComponentProps<typeof Box>;

export const FormItem = ({ label, error, children, ...rest }: Props) => (
  <Box flexDirection="column" {...rest}>
      {!!label && (
        <Text variant="captionBold" color="textSecondary" mb="s" ml="s">
          {label}
        </Text>
      )}
      {children}
      {!!error && (
        <Text variant="captionReg" color="error" mt="s" ml="s">
          {error}
        </Text>
      )}
    </Box>
)