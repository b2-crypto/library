import React, { ReactNode } from 'react';

import { Box, Text } from '../atoms';
import { Button } from './Button';
import { ArrowLeftIcon } from '../../assets/icons';

export const ScreenHeader = ({
  title,
  rightItem,
  onBackPress,
}: {
  title: string;
  rightItem?: ReactNode;
  onBackPress: () => void;
}) => {
  return (
    <Box
      flexDirection="row"
      padding="xxs"
      borderBottomWidth={1}
      borderColor="border3"
      alignItems="center"
      justifyContent="space-between"
      accessible
      accessibilityRole="header"
      accessibilityLabel={title}>
      <Box flexDirection="row" alignItems="center">
        <Button
          variant="transparent"
          onPress={onBackPress}
          icon={<ArrowLeftIcon />}
        />
        <Text variant="bodyBold" marginStart="m" color="textSecondary">
          {title}
        </Text>
      </Box>
      {rightItem}
    </Box>
  );
};
