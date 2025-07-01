import { IAccountPosition } from '../types/apiResponses';
/**
 * Custom hook that retrieves the balances for every account of the user.
 *
 * This hook uses the `useGetUserAccountsQuery` hook to get the user's accounts.
 * It then dispatches requests to the `getAccountPositions` endpoint for each account.
 *
 * @returns An object containing the account balances, where the keys are the account IDs and the values are arrays of `IAccountPosition` objects.
 */
export declare function useAllAccountsPositions(): Record<
  number,
  IAccountPosition[]
>;
