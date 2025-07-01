import React from 'react';
import { Theme } from '../../../theme/theme';
export type WalletItemProps = {
  symbol: string;
  name: string;
  subTitle: string;
  amount?: string;
  secondaryAmount?: string | React.ReactNode;
  subTitleColor?: keyof Theme['colors'];
  onPress?: () => void;
};
export declare const WalletItem: ({
  symbol,
  name,
  subTitle,
  amount,
  secondaryAmount,
  subTitleColor,
  onPress,
}: WalletItemProps) => React.JSX.Element;
