import React from 'react';
import { Box, Image } from '../atoms';
import VerificationBg from '../../assets/images/verificationBg/verificationBg.png';
export const ItemWithBg = ({ children, borderRadius, source, ...boxProps }) => (<Box justifyContent="center" {...boxProps}>
    <Image source={source || VerificationBg} borderRadius={borderRadius || 0} resizeMode="cover" backgroundColor="brandSolid" width="100%" height="100%" position="absolute"/>
    <Box padding="m">
      {children}
    </Box>
  </Box>);
