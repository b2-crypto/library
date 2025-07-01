import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useGetMarginAccountInfoQuery } from '../../../services';
import { useUserCurrentAccount } from '../../../hooks';
import { MARGIN_REFRESH_INTERVAL } from '../../../helpers/constants';
export function useMarginAccountInfo() {
    const { currentAccount } = useUserCurrentAccount();
    return useGetMarginAccountInfoQuery(currentAccount ? { accountId: currentAccount?.AccountId || 0 } : skipToken, { pollingInterval: MARGIN_REFRESH_INTERVAL });
}
