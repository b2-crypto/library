import React from 'react';
import { AccountTransactionActivity } from '../../../types/apiResponses';
export declare const AccountTransactionItemView: ({
  item,
  onPress,
  index,
}: {
  item: AccountTransactionActivity;
  onPress?: ((item: AccountTransactionActivity) => void) | undefined;
  index?: number | undefined;
}) => React.JSX.Element;
