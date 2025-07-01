import * as React from 'react';
import { MarginPositionItem } from '../types';
type Props = {
  item: MarginPositionItem;
  onCancel?: () => void;
  onClose?: () => void;
  onRepay?: () => void;
  cancelLoading?: boolean;
  error?: string;
  isProcessed?: boolean;
};
export declare const MarginPositionCard: ({
  item,
  onCancel,
  onClose,
  onRepay,
  cancelLoading,
  error,
  isProcessed,
}: Props) => React.JSX.Element;
export {};
