import React from 'react';
import { UserWallet } from '../../../hooks';
import { IWalletList } from '../../../types/commonTypes';
export declare const VisibleWalletsModalWidget: () => React.JSX.Element;
type Props = {
  /** List of available wallets */
  data: UserWallet[];
  /** Map of the enabled wallets */
  walletList: IWalletList;
  /** Optional renderer for the item. By default `CryptoWithCheckbox` will be used */
  renderItem?: ({ item }: { item: UserWallet }) => void;
};
export declare const VisibleWalletsModal: ({
  data,
  walletList,
  renderItem,
}: Props) => React.JSX.Element;
export {};
