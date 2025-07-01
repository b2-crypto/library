import React from 'react';
import { WalletActivity } from '../../../types/apiResponses';
type WalletItemViewProps = {
  /** Wallet activity item */
  item: WalletActivity;
  /** Callback to handle press */
  onPress?: (item: WalletActivity) => void;
};
export declare const WalletItemView: ({
  item,
  onPress,
}: WalletItemViewProps) => React.JSX.Element;
export {};
