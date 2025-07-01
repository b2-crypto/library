import React from 'react';
import { Box } from './Box';
import { Text } from './Text';
export const FormItem = ({ label, error, children, ...rest }) => (<Box flexDirection="column" {...rest}>
      {!!label && (<Text variant="captionBold" color="textSecondary" mb="s" ml="s">
          {label}
        </Text>)}
      {children}
      {!!error && (<Text variant="captionReg" color="error" mt="s" ml="s">
          {error}
        </Text>)}
    </Box>);
