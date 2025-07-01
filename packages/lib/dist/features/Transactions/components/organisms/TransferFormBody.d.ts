import React from 'react';
import { AmountFieldAsset } from '../../types';
import { AccountField } from '../molecules';
type Props = {
  /** List of the user's accounts to use for dropdown options. */
  accounts: React.ComponentProps<typeof AccountField>['accounts'];
  /** List of products for the asset dropdown in the Amount field. */
  products: Array<AmountFieldAsset>;
  /** The default account to transfer from. */
  defaultFromAccount: React.ComponentProps<
    typeof AccountField
  >['accounts'][number];
  /** The default account to transfer to. */
  defaultToAccount: React.ComponentProps<
    typeof AccountField
  >['accounts'][number];
  /** Whether the products are loading. */
  isLoading: boolean;
};
export declare const TransferFormBody: ({
  defaultFromAccount,
  defaultToAccount,
  products,
  accounts,
  isLoading,
}: Props) => React.JSX.Element;
export {};
