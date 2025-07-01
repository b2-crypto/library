import React from 'react';
import { UserWallet } from '../../../hooks';
type WidgetProps = {
  /** Handler for user's click on item. Usually used for navigation. */
  onItemPress: (item: UserWallet) => void;
};
export declare const WalletsListWidget: ({
  onItemPress,
}: WidgetProps) => React.JSX.Element;
export {};
