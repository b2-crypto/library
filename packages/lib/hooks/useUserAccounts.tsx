import { useGetUserAccountsQuery } from '../services';

export const useUserAccounts = () => {
  return useGetUserAccountsQuery();
};
