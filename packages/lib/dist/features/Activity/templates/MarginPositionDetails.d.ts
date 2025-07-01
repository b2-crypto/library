import React from 'react';
import { MarginPositionItem } from '../types';
type Props = {
  item: MarginPositionItem;
  onSuccess?: () => void;
};
export declare const MarginPositionDetails: ({
  item,
  onSuccess,
}: Props) => React.JSX.Element;
export {};
