import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useEffect, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

import {
  useGetAccountPositionsQuery,
  useGetProductsQuery,
} from '../../../services/apexApi';
import { useGetUserAccountsQuery } from '../../../services/profileApi';
import { TransferFormValues } from '../types';
import { useMarginProductConfig } from '../../../features/Wallet/hooks/useMarginProductConfig';
import { useUserCurrentAccount } from '../../../hooks/useUserCurrentAccount';
export function useTransferBody() {
  const {
    data: marginProductConfigs,
    isLoading: isMarginProductConfigsLoading,
  } = useMarginProductConfig();
  const { data: accounts, isLoading: isAccountsLoading } =
    useGetUserAccountsQuery();
  const { currentAccount } = useUserCurrentAccount();

  const initialValue = useMemo(
    () => ({ AccountId: 0, AccountName: 'Select account' }),
    [],
  );

  const defaultFromAccount =
    accounts?.find(
      account => account.AccountId === currentAccount?.AccountId,
    ) || initialValue;

  // If we're on margin account, then get the first account that has AccountType === 'Asset'
  // If we're on spot account, then get the first account that has AccountType === 'Margin'
  const defaultToAccount = useMemo(() => {
    if (currentAccount?.AccountType === 'Margin') {
      return (
        accounts?.filter(account => account.AccountType === 'Asset')[0] ||
        initialValue
      );
    }
    return (
      accounts?.filter(account => account.AccountType === 'Margin')[0] ||
      initialValue
    );
  }, [accounts, currentAccount?.AccountType, initialValue]);

  const { data: rawProducts, isLoading: isProductsLoading } =
    useGetProductsQuery();
  const { watch, trigger } = useFormContext<TransferFormValues>();
  const fromAccountId = watch('fromAccountId');
  const toAccountId = watch('toAccountId');
  const defaultProductId = watch('defaultProductId');
  const { data: positions, isLoading: isPositionsLoading } =
    useGetAccountPositionsQuery(
      fromAccountId ? { accountId: fromAccountId } : skipToken,
    );

  // Re-validate `toAccountId` whenever `fromAccountId` changes (to check for equal values)
  useEffect(() => {
    trigger('toAccountId');
  }, [trigger, fromAccountId]);

  const toAccountIsMargin =
    accounts?.find(account => account.AccountId === toAccountId)
      ?.AccountType === 'Margin';

  const formattedAccounts = useMemo(
    () =>
      accounts?.map(account => ({
        AccountId: account.AccountId,
        AccountName: account.AccountName,
      })) ?? [],
    [accounts],
  );

  const products = useMemo(() => {
    const productsList =
      rawProducts
        ?.map(p => {
          const marginProductConfig = marginProductConfigs?.find(
            config => config.ProductId === p.ProductId,
          );
          const position = positions?.find(
            pos => pos.ProductId === p.ProductId,
          );
          return {
            id: p.ProductId,
            symbol: p.Product,
            fullName: p.ProductFullName,
            decimalPlaces: p.DecimalPlaces,
            type:
              p.ProductType === 'NationalCurrency'
                ? ('fiat' as const)
                : ('crypto' as const),
            amount: position ? position.Amount - position.Hold : 0,
            notionalSymbol: position?.NotionalProductSymbol,
            notionalRate: position?.NotionalRate,
            notionalAmount: position
              ? (position.Amount - position.Hold) * position.NotionalRate
              : 0,
            disabled: toAccountIsMargin
              ? !marginProductConfig?.CollateralEnabled
              : false,
          };
        })
        .filter(product => product.amount > 0)
        .sort((a, b) => b.notionalAmount - a.notionalAmount) ?? [];

    // If defaultProductId is defined and exists in the products list,
    // move it to the front of the array
    if (defaultProductId) {
      const index = productsList.findIndex(p => p.id === defaultProductId);
      if (index > -1) {
        const [product] = productsList.splice(index, 1);
        productsList.unshift(product);
      }
    }

    return productsList;
  }, [
    rawProducts,
    positions,
    marginProductConfigs,
    toAccountIsMargin,
    defaultProductId,
  ]);

  return {
    accounts: formattedAccounts,
    products,
    defaultFromAccount,
    defaultToAccount,
    isLoading:
      isMarginProductConfigsLoading ||
      isAccountsLoading ||
      isProductsLoading ||
      isPositionsLoading,
  };
}
