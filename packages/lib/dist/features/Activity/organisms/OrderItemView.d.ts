import React from 'react';
import { OrderActivity } from '../../../types/apiResponses';
type OrderItemViewProps = {
  /** Order activity item */
  item: OrderActivity;
  /** Callback to handle press */
  onPress?: (item: OrderActivity) => void;
};
export declare const OrderItemView: ({
  item,
  onPress,
}: OrderItemViewProps) => React.JSX.Element;
export {};
