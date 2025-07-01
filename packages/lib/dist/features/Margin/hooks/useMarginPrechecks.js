import { skipToken } from '@reduxjs/toolkit/query';
import { useUserInfo } from '../../../hooks';
import { useGetAccountPositionsQuery, useGetMarginKVPQuery, useGetUserAccountsQuery, } from '../../../services';
import { useCurrentOms } from '../../../hooks/useCurrentOms';
export function useMarginPrechecks() {
    const { data: userInfo } = useUserInfo();
    const isMarginEnabled = !!userInfo?.MarginBorrowerEnabled;
    const { data: accountInfo, isLoading: accountLoading } = useGetUserAccountsQuery(undefined, {
        selectFromResult: ({ data, ...rest }) => ({
            data: data?.find(a => a.AccountId === userInfo?.AccountId),
            ...rest,
        }),
    });
    const { data: kvpValues, isLoading: kvpLoading } = useGetMarginKVPQuery(isMarginEnabled ? skipToken : undefined);
    const { data: positions, isLoading: positionsLoading } = useGetAccountPositionsQuery(userInfo ? { accountId: userInfo.AccountId } : skipToken);
    const totalAccountValue = positions?.reduce((sum, p) => sum + p.NotionalValue, 0) || 0;
    const { data: currentOms, isLoading: omsLoading } = useCurrentOms();
    const data = {
        isMarginEnabled,
        minDeposit: {
            value: 0,
            symbol: 'USD',
        },
        isVLEligible: false,
        isEnoughFunds: false,
        isDenied: !isMarginEnabled,
        isAccountFrozen: !!accountInfo?.Frozen,
        isLoading: accountLoading || kvpLoading || positionsLoading || omsLoading,
    };
    if (kvpValues && accountInfo && !isMarginEnabled) {
        const { marginVerificationLevels, minDepositValue } = kvpValues;
        data.isVLEligible = marginVerificationLevels.includes(accountInfo.VerificationLevel);
        data.minDeposit.value = minDepositValue;
        if (currentOms) {
            data.minDeposit.symbol = currentOms.BaseNotionalProductSymbol;
        }
        data.isEnoughFunds = totalAccountValue >= minDepositValue;
        data.isDenied =
            !data.isVLEligible || !data.isEnoughFunds || data.isAccountFrozen;
    }
    return data;
}
