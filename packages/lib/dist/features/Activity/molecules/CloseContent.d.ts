import React from 'react';
import { MarginPositionItem } from '../types';
import { RepaymentAssetOption } from '../../../services';
type Props = {
  item: MarginPositionItem;
  onSelectedItemsReady?: (items: RepaymentAssetOption[]) => void;
};
export declare const CloseContent: ({
  item,
  onSelectedItemsReady,
}: Props) => React.JSX.Element;
export {};
