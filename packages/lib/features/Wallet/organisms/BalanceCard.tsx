import React from 'react';
import { Box, Text } from '../../../components/atoms';
import { ProductIcon, Card } from '../../../components/molecules';

import { translate } from '../../../helpers/i18n';
import { formatCurrency, formatNumber } from '../../../helpers/format';
import { UserWallet } from '../../../hooks';
import { testID } from '../../../helpers/testId';

export const BalanceCard = ({ product }: { product: UserWallet }) => {
  return (
    <Card variant="elevated" flexDirection="column" padding="m" margin="m">
      <Box flex={1} flexDirection="row" justifyContent="space-between" mb="s">
        <Text mb="s" mr="m" color="textSecondary">
          {translate('wallet.yourCryptoBalance', {
            ProductSymbol: product?.ProductSymbol,
          })}
        </Text>
        <Text
          fontSize={14}
          color="textSecondary"
          accessible
          accessibilityLabel="Notional amount"
          {...testID('notionalAmount')}>
          {formatCurrency(
            product?.NotionalValue || 0,
            product?.NotionalProductSymbol,
            product?.NotionalDecimalPlaces,
          )}
        </Text>
      </Box>
      <Box flexDirection="row" alignItems="center">
        <ProductIcon symbol={product?.ProductSymbol} size={24} />
        <Text variant="headlineBold" color="textPrimary" marginHorizontal="xs"
          accessible
          accessibilityLabel="Amount"
          {...testID('amount')}>
          {product?.Amount
            ? formatNumber(product.Amount, product.DecimalPlaces)
            : ''}
        </Text>
        <Text variant="textBold" color="textSecondary"
          accessible
          accessibilityLabel="Symbol"
          {...testID('symbol')}>
          {product?.ProductSymbol}
        </Text>
      </Box>
    </Card>
  );
};
