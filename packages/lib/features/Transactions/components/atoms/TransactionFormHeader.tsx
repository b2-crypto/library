import React from 'react';
import { BoxProps } from '@shopify/restyle';

import { CloseIcon } from '../../../../assets/icons';
import { Box } from '../../../../components/atoms';
import { Button } from '../../../../components/molecules';
import { Theme } from '../../../../theme';
import { testID } from '../../../../helpers/testId';

type Props = {
  children: React.ReactNode;
  /** Additional props for icon wrapper (e.g. border color, elevation, etc) */
  iconBoxProps: Partial<Omit<BoxProps<Theme>, 'width' | 'height'>>;
  /** Icon component */
  icon: React.ReactNode;
  /** Handler for the close button */
  onClose: () => void;
};

export const TransactionFormHeader = ({
  children,
  onClose,
  icon,
  iconBoxProps,
}: Props) => (
  <Box
    paddingHorizontal="m"
    flexDirection="row"
    justifyContent="space-between"
    alignItems="center">
    <Box
      width={44}
      height={44}
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      borderRadius={6}
      mr="sm"
      {...iconBoxProps}>
      {icon}
    </Box>
    {children}
    <Button
      icon={<CloseIcon />}
      variant="line"
      onPress={onClose}
      ml="sm"
      accessibilityLabel="Close button"
      {...testID('close')}
    />
  </Box>
);
