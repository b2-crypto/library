import React from 'react';
import { StyleSheet } from 'react-native';
import { Box, Text } from '../../../../components/atoms';
import { testID } from '../../../../helpers/testId';
export const OrderSummary = ({ items }) => (<Box flexDirection="column" alignSelf="stretch" gap="xs">
    {items.map((item, idx) => (<Box flex={1} key={item.type === 'separator' ? `separator-${idx}` : item.name} flexDirection="row" justifyContent="space-between" alignItems="center">
        {item.type === 'separator' ? (<Box height={16}/>) : (<>
            <Text variant="captionReg" color="textSecondary" mr="s" style={styles.lineName} numberOfLines={1} ellipsizeMode="clip">
              {item.name}
            </Text>
            {typeof item.value === 'object' && item.value !== null ? (<>
                <Text variant="bodyBold" mr="s" textAlign="right" accessible accessibilityLabel={item.name} {...testID(item.name)}>
                  {item.value.amount}
                </Text>
                <Box width={45} flexShrink={0} flexWrap="nowrap" justifyContent="flex-end">
                  <Text variant="captionBold" color="textSecondary" textAlign="right">
                    {item.value.symbol}
                  </Text>
                </Box>
              </>) : (<Text variant="bodyBold" textAlign="right" accessible accessibilityLabel={item.name} {...testID(item.name)}>
                {item.value || '—'}
              </Text>)}
          </>)}
      </Box>))}
  </Box>);
const styles = StyleSheet.create({
    lineName: { flex: 1 },
});
