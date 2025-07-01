import React from 'react';
import { OrderActivity } from '../../../types/apiResponses';
export declare const OrderDetails: ({
  item,
  onOrderCancel,
}: {
  item: OrderActivity;
  onOrderCancel?: (() => void) | undefined;
}) => React.JSX.Element;
