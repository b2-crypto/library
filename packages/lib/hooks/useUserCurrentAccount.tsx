import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  RootState,
  selectUser,
  setCurrentAccount,
  setLastSessionToken,
} from '../stores';
import { GetAccountInfoResponse, AccountCurrentInfo } from '../types';

import { useUserAccounts } from './useUserAccounts';
import { useUserInfo } from './useUserInfo';
import { useAppSelector } from './useAppSelector';

const mapToMarginAccountInfo = (
  account: GetAccountInfoResponse,
): AccountCurrentInfo | null => {
  if (!account || typeof account !== 'object') {
    return null;
  }

  return {
    AccountId: account.AccountId,
    AccountType: account.AccountType,
    Balance: 0,
  };
};

export const useUserCurrentAccount = () => {
  const dispatch = useDispatch();
  const { data: accounts } = useUserAccounts();
  const { data: userInfo } = useUserInfo();
  const user = useAppSelector(selectUser);
  const lastSessionToken = useSelector(
    (state: RootState) => state.currentAccount?.lastSessionToken,
  );

  const storedCurrentAccount = useSelector(
    (state: RootState) => state.currentAccount?.currentAccount ?? null,
  );

  const mappedAccounts = useMemo(() => {
    if (!accounts?.length) {
      return [];
    }
    return accounts
      .map(mapToMarginAccountInfo)
      .filter((acc): acc is AccountCurrentInfo => acc !== null);
  }, [accounts]);

  const defaultAccount = useMemo(() => {
    if (!mappedAccounts.length) {
      return null;
    }

    return (
      mappedAccounts.find(acc => acc.AccountId === userInfo?.AccountId) ||
      mappedAccounts[0]
    );
  }, [mappedAccounts, userInfo?.AccountId]);

  const accountStillValid = useMemo(() => {
    if (!storedCurrentAccount) {
      return false;
    }

    return mappedAccounts.some(
      acc => acc.AccountId === storedCurrentAccount.AccountId,
    );
  }, [mappedAccounts, storedCurrentAccount]);

  const currentAccount: AccountCurrentInfo | null = useMemo(() => {
    return accountStillValid ? storedCurrentAccount : defaultAccount;
  }, [accountStillValid, storedCurrentAccount, defaultAccount]);

  // --- Sync default account if current is invalid or missing ---
  useEffect(() => {
    if (
      !accountStillValid &&
      defaultAccount &&
      storedCurrentAccount?.AccountId !== defaultAccount.AccountId
    ) {
      dispatch(setCurrentAccount({ account: defaultAccount }));
    }
  }, [
    accountStillValid,
    defaultAccount,
    dispatch,
    storedCurrentAccount?.AccountId,
  ]);

  // --- Reset to default on SessionToken change ---
  useEffect(() => {
    const currentToken = user?.SessionToken ?? null;

    const shouldSetDefaultAccount =
      currentToken && currentToken !== lastSessionToken && defaultAccount;

    if (shouldSetDefaultAccount) {
      dispatch(setCurrentAccount({ account: defaultAccount }));
      dispatch(setLastSessionToken({ token: currentToken }));
    }
  }, [user?.SessionToken, defaultAccount, lastSessionToken, dispatch]);

  const onChangeCurrentAccount = (account: GetAccountInfoResponse) => {
    const mapped = mapToMarginAccountInfo(account);

    if (mapped) {
      dispatch(setCurrentAccount({ account: mapped }));
    }
  };

  return {
    currentAccount,
    isMarginAccount: currentAccount?.AccountType?.toLowerCase() === 'margin',
    onChangeCurrentAccount,
  };
};
