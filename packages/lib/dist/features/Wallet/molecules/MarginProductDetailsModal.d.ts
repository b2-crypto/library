import React from 'react';
import { MarginWalletItemType } from './MarginWalletItem';
type Props = {
  modalVisible: boolean;
  handleClose?: () => void;
  productItem: MarginWalletItemType | undefined;
  onTransferPress: () => void;
};
export declare const MarginProductDetailsModal: ({
  modalVisible,
  handleClose,
  productItem,
  onTransferPress,
}: Props) => React.JSX.Element | null;
export {};
