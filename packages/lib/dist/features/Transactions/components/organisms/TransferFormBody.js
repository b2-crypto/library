import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { Box } from '../../../../components/atoms';
import { translate } from '../../../../helpers/i18n';
import { AccountField, ProductAmountField } from '../molecules';
export const TransferFormBody = ({ defaultFromAccount, defaultToAccount, products, accounts, isLoading, }) => {
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
    return (<>
      <Box mt="s">
        <AccountField name="fromAccountId" label={translate('transactions.fromAccount')} accounts={accounts} defaultValue={defaultFromAccount?.AccountId}/>
      </Box>
      <Box mt="s">
        <AccountField name="toAccountId" label={translate('transactions.toAccount')} accounts={accounts} defaultValue={defaultToAccount?.AccountId}/>
      </Box>
      <Box mt="s">
        <ProductAmountField assetFieldName="productId" amountFieldName="amount" label={translate('transactions.asset')} products={products} defaultProductId={products[0]?.id} isLoading={isLoading} showMaxButton ignoreMaxLength/>
      </Box>
    </>);
};
