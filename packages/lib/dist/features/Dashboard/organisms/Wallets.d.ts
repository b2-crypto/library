import * as React from 'react';
import { WalletBalanceItem } from '../../../components/molecules';
type WalletsProps = {
  onItemPress?: (item: WalletBalanceItem) => void;
};
type WalletsScrollListProps = {
  data: WalletBalanceItem[];
} & WalletsProps;
export declare function useWalletBalances(): {
  isLoading: boolean;
  refetch: () => void;
  isMarginAccount: boolean;
  data: WalletBalanceItem[];
};
export declare const WalletsScrollList: ({
  data,
  onItemPress,
}: WalletsScrollListProps) => React.JSX.Element;
export declare const Wallets: ({
  onItemPress,
}: WalletsProps) => React.JSX.Element;
export {};
