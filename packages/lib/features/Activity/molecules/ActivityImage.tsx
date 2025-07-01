import React, { ReactNode } from 'react';

import { Box } from '../../../components/atoms';

export const ActivityImage = ({ children }: { children: ReactNode }) => (
  <Box
    width={32}
    height={32}
    alignItems="center"
    justifyContent="center"
    borderWidth={2}
    borderRadius={16}
    marginRight="m"
    borderColor="border3">
    {children}
  </Box>
);
