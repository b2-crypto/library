import React from 'react';
import { UserWallet } from '../../../hooks';
interface AssetSelectorProps {
  setSelectedId: (instrumentId: number) => void;
  product?: UserWallet;
  products: UserWallet[];
  isLoading: boolean;
}
export declare const AssetSelector: ({
  product,
  setSelectedId,
  products,
  isLoading,
}: AssetSelectorProps) => React.JSX.Element;
export {};
