import React, { FC } from 'react';
import { ColorValue } from 'react-native';
import { Box } from '@apex-rn/library/components';

import { Logo } from './Logo';

export const TopLogo: FC<{ color?: ColorValue }> = ({ color }) => (
  <Box
    alignItems="center"
    paddingVertical="m"
    borderBottomColor="border1"
    borderBottomWidth={1}>
    <Logo color={color} />
  </Box>
);
