import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, setCurrentAccount, setLastSessionToken, } from '../stores';
import { useUserAccounts } from './useUserAccounts';
import { useUserInfo } from './useUserInfo';
import { useAppSelector } from './useAppSelector';
const mapToMarginAccountInfo = (account) => {
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
    const lastSessionToken = useSelector((state) => state.currentAccount?.lastSessionToken);
    const storedCurrentAccount = useSelector((state) => state.currentAccount?.currentAccount ?? null);
    const mappedAccounts = useMemo(() => {
        if (!accounts?.length) {
            return [];
        }
        return accounts
            .map(mapToMarginAccountInfo)
            .filter((acc) => acc !== null);
    }, [accounts]);
    const defaultAccount = useMemo(() => {
        if (!mappedAccounts.length) {
            return null;
        }
        return (mappedAccounts.find(acc => acc.AccountId === userInfo?.AccountId) ||
            mappedAccounts[0]);
    }, [mappedAccounts, userInfo?.AccountId]);
    const accountStillValid = useMemo(() => {
        if (!storedCurrentAccount) {
            return false;
        }
        return mappedAccounts.some(acc => acc.AccountId === storedCurrentAccount.AccountId);
    }, [mappedAccounts, storedCurrentAccount]);
    const currentAccount = useMemo(() => {
        return accountStillValid ? storedCurrentAccount : defaultAccount;
    }, [accountStillValid, storedCurrentAccount, defaultAccount]);
    // --- Sync default account if current is invalid or missing ---
    useEffect(() => {
        if (!accountStillValid &&
            defaultAccount &&
            storedCurrentAccount?.AccountId !== defaultAccount.AccountId) {
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
        const shouldSetDefaultAccount = currentToken && currentToken !== lastSessionToken && defaultAccount;
        if (shouldSetDefaultAccount) {
            dispatch(setCurrentAccount({ account: defaultAccount }));
            dispatch(setLastSessionToken({ token: currentToken }));
        }
    }, [user?.SessionToken, defaultAccount, lastSessionToken, dispatch]);
    const onChangeCurrentAccount = (account) => {
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
