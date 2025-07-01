import React from 'react';
import { StyleSheet } from 'react-native';

import { Theme } from '../../theme';
import { Text, Box } from '../atoms';
import { testID } from '../../helpers/testId';

type BoxProps = React.ComponentProps<typeof Box>;

type TableCellProps = {
  title: string;
  value: string;
  titleColor?: keyof Theme['colors'];
  valueColor?: keyof Theme['colors'];
  valueStyleVariant?: string;
  isNarrow?: boolean;
  isInverted?: boolean;
} & BoxProps;

export const TableCell = ({
  title,
  value,
  titleColor,
  valueColor,
  isNarrow,
  isInverted,
  ...props
}: TableCellProps) => (
  <Box
    flex={1}
    flexDirection={isInverted ? 'row-reverse' : 'row'}
    justifyContent="space-between"
    alignItems="center"
    paddingVertical={isNarrow ? 'xxs' : 's'}
    paddingRight="s"
    paddingLeft={!isNarrow ? 's' : 'm'}
    accessible
    accessibilityLabel={title}
    {...testID(title)}
    {...props}>
    <Text
      numberOfLines={1}
      mr={!isInverted ? (!isNarrow ? 's' : 'm') : undefined}
      ml={isInverted ? (!isNarrow ? 's' : 'm') : undefined}
      textAlign={isInverted ? 'right' : 'left'}
      style={styles.title}
      color={titleColor ? titleColor : 'textSecondary'}
      variant="captionReg">
      {title}
    </Text>
    <Text
      numberOfLines={1}
      color={valueColor ? valueColor : 'textPrimary'}
      variant={isNarrow ? 'captionBold' : 'bodyReg'}>
      {value}
    </Text>
  </Box>
);

const styles = StyleSheet.create({ title: { flex: 1 } });
