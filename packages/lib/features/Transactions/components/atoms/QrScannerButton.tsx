import React from 'react';
import { QrCode } from '../../../../assets/icons';
import { useTheme } from '@shopify/restyle';

import { Theme } from '../../../../theme';
import { Button, ButtonProps } from '../../../../components/molecules';

export const QrScannerButton = (props: ButtonProps) => {
  const { colors } = useTheme<Theme>();

  return (
    <Button
      variant="transparent"
      icon={<QrCode color={colors.brandSolid} />}
      {...props}
    />
  );
};
