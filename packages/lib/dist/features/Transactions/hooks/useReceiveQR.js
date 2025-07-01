import { useUserInfo } from "../../../hooks";
import { useGetDepositInfoQuery } from "../../../services/apexApi";
import { skipToken } from "@reduxjs/toolkit/dist/query";
export function useReceiveQR(productId) {
    const { data: user } = useUserInfo();
    return useGetDepositInfoQuery(user?.AccountId && productId ? {
        AccountId: user?.AccountId,
        ProductId: productId,
        GenerateNewKey: true,
    } : skipToken);
}
