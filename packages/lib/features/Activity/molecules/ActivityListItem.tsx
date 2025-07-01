import React, { ReactNode } from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import { Box, Text } from '../../../components/atoms';
import { Theme } from '../../../theme';
import { testID } from '../../../helpers/testId';

type Props = {
  /** Activity icon */
  image: ReactNode;
  /** Card title */
  title: string;
  /** Product name (symbol, order type, etc) */
  product?: string;
  /** Order amount */
  amount: string | number;
  /** Order currency (symbol) */
  currency?: string;
  /** Timestamp for the transaction */
  time: number | string;
  /** Transaction status (string or ReactNode) */
  status?: ReactNode;
  /** Color for the status color */
  statusColor?: keyof Theme['colors'];
  /** Item press handler */
  onPress?: () => void;
  /** Index of the item in the list */
  index?: number;
};

export const ActivityListItem = ({
  image,
  title,
  product,
  amount,
  currency,
  time,
  status,
  statusColor = 'buy',
  onPress,
  index,
}: Props) => (
  <TouchableWithoutFeedback
    onPress={onPress}
    accessibilityLabel="Open details"
    {...testID(`itemNav${index}`)}>
    <Box flexDirection="row" paddingHorizontal="m" paddingVertical="sm">
      <Box
        width={32}
        height={32}
        alignItems="center"
        justifyContent="center"
        borderWidth={2}
        borderRadius={16}
        marginRight="m"
        borderColor="border3">
        {image}
      </Box>
      <Box flex={1}>
        <Text
          variant="textBold"
          mr="xxs"
          accessible
          accessibilityLabel="Title"
          {...testID(`title${index}`)}>
          {title}
        </Text>
        <Box flexDirection="row">
          {!!status && (
            <Text
              variant="captionBold"
              color={statusColor}
              textTransform="uppercase"
              marginEnd="xs"
              accessible
              accessibilityLabel="Status"
              {...testID(`status${index}`)}>
              {status}
            </Text>
          )}
          <Text
            variant="captionBold"
            color="textSecondary"
            accessible
            accessibilityLabel="Product"
            {...testID(`productName${index}`)}>
            {product}
          </Text>
        </Box>
      </Box>

      <Box>
        <Box
          flexDirection="row"
          alignItems="baseline"
          justifyContent="flex-end"
          mr="xxs">
          <Text
            variant="bodyBold"
            accessible
            accessibilityLabel="Amount"
            {...testID(`amount${index}`)}>
            {amount}
          </Text>
          {!!currency && (
            <Text variant="captionBold" ml="xs">
              {currency}
            </Text>
          )}
        </Box>
        <Text
          variant="captionBold"
          color="textSecondary"
          textAlign="right"
          accessible
          accessibilityLabel="Date"
          {...testID(`date${index}`)}>
          {new Date(time).toLocaleDateString()}
        </Text>
      </Box>
    </Box>
  </TouchableWithoutFeedback>
);
