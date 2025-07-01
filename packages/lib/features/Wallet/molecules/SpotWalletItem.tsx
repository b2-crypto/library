import React from 'react';

import { TouchableOpacity } from '../../../components/atoms';
import { Card } from '../../../components/molecules';
import { formatCurrency, formatNumber } from '../../../helpers/format';
import { UserWallet } from '../../../hooks';
import { testID } from '../../../helpers/testId';
import { WalletItem } from '../atoms';

export const SpotWalletItem = ({
  item,
  onPress,
}: {
  item: UserWallet;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      {...testID(`${item.ProductSymbol}Button`)}>
      <Card variant="elevated" marginHorizontal="m" marginBottom="m">
        <WalletItem
          symbol={item.ProductSymbol}
          name={item.ProductSymbol.toUpperCase()}
          subTitle={item.ProductFullName}
          amount={
            item.Amount
              ? formatNumber(item.Amount, item.DecimalPlaces)
              : undefined
          }
          secondaryAmount={
            item.Amount
              ? formatCurrency(
                  item.NotionalValue,
                  item.NotionalProductSymbol,
                  item.NotionalDecimalPlaces,
                )
              : undefined
          }
        />
      </Card>
    </TouchableOpacity>
  );
};
