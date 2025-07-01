import { skipToken } from '@reduxjs/toolkit/dist/query';

import { useGetUserAccountsQuery } from '../../../services/profileApi';

import { useMarginAvailable } from './useMarginAvailable';

export function useMarginAccount() {
  const isMarginAvailable = useMarginAvailable();
  return useGetUserAccountsQuery(isMarginAvailable ? undefined : skipToken, {
    selectFromResult: ({ data, ...rest }) => {
      return { data: data?.find(a => a.AccountType === 'Margin'), ...rest };
    },
  });
}
