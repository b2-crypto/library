import React from 'react';
import { DashedBox, Text, Box } from '../atoms';
export const SectionHeading = ({ children, extra, ...rest }) => {
    return (<DashedBox flexDirection="row" padding="m" justifyContent="space-between" alignItems="center" bottomDash accessible accessibilityRole="header" accessibilityLabel={typeof children === 'string' ? children : undefined} {...rest}>
      <Box flex={1} mr={extra ? 'sm' : undefined}>
        {typeof children === 'string' || typeof children === 'number' ? (<Text variant="textBold">{children}</Text>) : (children)}
      </Box>
      {extra}
    </DashedBox>);
};
