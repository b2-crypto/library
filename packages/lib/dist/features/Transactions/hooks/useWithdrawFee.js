import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useUserInfo } from '../../../hooks';
import { useGetWithdrawFeeQuery } from '../../../services/apexApi';
export function useWithdrawFee(productId, amount, skip) {
    const { data: userInfo } = useUserInfo();
    return useGetWithdrawFeeQuery(userInfo?.AccountId && productId && amount && !skip
        ? { AccountId: userInfo.AccountId, ProductId: productId, Amount: amount }
        : skipToken, { refetchOnMountOrArgChange: true });
}
