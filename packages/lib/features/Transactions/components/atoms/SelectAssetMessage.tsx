import React from 'react';
import { Box, Text } from '../../../../components/atoms';
import { testID } from '../../../../helpers/testId';

type Props = {
  /** Message to display */
  message: string;
};

export const SelectAssetMessage = ({ message }: Props) => {
  return (
    <Box
      borderColor="border3"
      borderWidth={1}
      margin="m"
      padding="m"
      minHeight={200}
      justifyContent="center"
      alignItems="center"
      accessible
      accessibilityLabel="Select asset"
      {...testID('selectAsset')}>
      <Text>{message}</Text>
    </Box>
  );
};
