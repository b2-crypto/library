import React, { ReactNode } from 'react';
import { BoxProps } from '@shopify/restyle';

import { Theme } from '../../theme';
import { Box, Image } from '../atoms';

import VerificationBg from '../../assets/images/verificationBg/verificationBg.png';
import { ImageProps } from 'react-native';

type Props = {
  children: ReactNode;
  source?: ImageProps['source'];
} & BoxProps<Theme>;

export const ItemWithBg = ({
  children,
  borderRadius,
  source,
  ...boxProps
}: Props) => (
  <Box justifyContent="center" {...boxProps}>
    <Image
      source={source || VerificationBg}
      borderRadius={borderRadius || 0}
      resizeMode="cover"
      backgroundColor="brandSolid"
      width="100%"
      height="100%"
      position="absolute"
    />
    <Box padding="m">
      {children}
    </Box>
  </Box>
);
