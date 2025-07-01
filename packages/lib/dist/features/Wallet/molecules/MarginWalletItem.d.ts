import React from 'react';
import { MarginBalanceResponse } from '../../../types/apiResponses';
export type MarginWalletItemType = MarginBalanceResponse & {
  NotionalProductSymbol: string;
  ProductSymbol: string;
  ProductFullName: string;
  DecimalPlaces: number;
};
export declare const MarginWalletItem: ({
  item,
  onPress,
}: {
  item: MarginWalletItemType;
  onPress: () => void;
}) => React.JSX.Element;
