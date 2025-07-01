import React from 'react';
import { MarginPositionItem as ItemType } from '../types';
type PositionItemComponent = React.FunctionComponent<{
  item: ItemType;
  onPress?: (item: ItemType) => void;
  index?: number;
}> & {
  estimatedItemSize?: number;
};
export declare const MarginPositionListItem: PositionItemComponent;
export {};
