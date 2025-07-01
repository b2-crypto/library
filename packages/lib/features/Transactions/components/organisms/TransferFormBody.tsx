import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import { Box } from '../../../../components/atoms';
import { translate } from '../../../../helpers/i18n';
import { AmountFieldAsset } from '../../types';
import { AccountField, ProductAmountField } from '../molecules';

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

export const TransferFormBody = ({
  defaultFromAccount,
  defaultToAccount,
  products,
  accounts,
  isLoading,
}: Props) => {
  const { watch, setValue } = useFormContext();
  const fromAccountId = watch('fromAccountId');

  // If fromAccount changes, we need to set the productId to the first product
  // The product list has been sorted by notional amount, so the first product is the one with the highest notional amount
  useEffect(() => {
    if (products.length > 0) {
      setValue('productId', products[0].id);
      setValue('amount', undefined);
    }
  }, [fromAccountId, products, setValue]);

  return (
    <>
      <Box mt="s">
        <AccountField
          name="fromAccountId"
          label={translate('transactions.fromAccount')}
          accounts={accounts}
          defaultValue={defaultFromAccount?.AccountId}
        />
      </Box>
      <Box mt="s">
        <AccountField
          name="toAccountId"
          label={translate('transactions.toAccount')}
          accounts={accounts}
          defaultValue={defaultToAccount?.AccountId}
        />
      </Box>
      <Box mt="s">
        <ProductAmountField
          assetFieldName="productId"
          amountFieldName="amount"
          label={translate('transactions.asset')}
          products={products}
          defaultProductId={products[0]?.id}
          isLoading={isLoading}
          showMaxButton
          ignoreMaxLength
        />
      </Box>
    </>
  );
};
