import React from 'react';
import { CloseIcon } from '../../../../assets/icons';
import { Box } from '../../../../components/atoms';
import { Button } from '../../../../components/molecules';
import { testID } from '../../../../helpers/testId';
export const TransactionFormHeader = ({ children, onClose, icon, iconBoxProps, }) => (<Box paddingHorizontal="m" flexDirection="row" justifyContent="space-between" alignItems="center">
    <Box width={44} height={44} flexDirection="row" justifyContent="center" alignItems="center" borderRadius={6} mr="sm" {...iconBoxProps}>
      {icon}
    </Box>
    {children}
    <Button icon={<CloseIcon />} variant="line" onPress={onClose} ml="sm" accessibilityLabel="Close button" {...testID('close')}/>
  </Box>);
