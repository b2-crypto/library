import { createSelector } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { apexApi } from '../services/apexApi';
import { useGetUserAccountsQuery } from '../services/profileApi';
import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';
const query = apexApi.endpoints.getAccountPositions;
const selector = createSelector((state) => state, (_, accs) => accs?.map(a => a.AccountId) ?? [], (state, accountIds) => Object.fromEntries(accountIds.map(accountId => [
    accountId,
    query.select({ accountId })(state).data ?? [],
])));
/**
 * Custom hook that retrieves the balances for every account of the user.
 *
 * This hook uses the `useGetUserAccountsQuery` hook to get the user's accounts.
 * It then dispatches requests to the `getAccountPositions` endpoint for each account.
 *
 * @returns An object containing the account balances, where the keys are the account IDs and the values are arrays of `IAccountPosition` objects.
 */
export function useAllAccountsPositions() {
    const dispatch = useAppDispatch();
    const { data: accounts } = useGetUserAccountsQuery();
    useEffect(() => {
        if (!accounts)
            return;
        const subscriptions = accounts.map(account => dispatch(query.initiate({ accountId: account.AccountId })));
        return () => subscriptions.forEach(s => s.unsubscribe());
    }, [accounts, dispatch]);
    return useAppSelector(state => selector(state, accounts));
}
