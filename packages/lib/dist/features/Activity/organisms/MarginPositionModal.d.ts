import React from 'react';
import { RepaymentAssetOption } from '../../../services';
import { MarginPositionItem } from '../types';
type Props = {
  isVisible: boolean;
  type: 'cancel' | 'close' | 'repay' | null;
  onClose: () => void;
  onConfirm: () => void;
  onRepaymentItemsChange?: (items: RepaymentAssetOption[]) => void;
  loading: boolean;
  item: MarginPositionItem;
};
export declare const MarginPositionModal: ({
  isVisible,
  type,
  onClose,
  onConfirm,
  onRepaymentItemsChange,
  loading,
  item,
}: Props) => React.JSX.Element | null;
export {};
