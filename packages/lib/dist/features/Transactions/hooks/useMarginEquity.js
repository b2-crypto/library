import { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { skipToken } from '@reduxjs/toolkit/query';
import { useUserCurrentAccount } from '../../../hooks';
import { useGetMarginAccountEquityQuery } from '../../../services';
import { useOrderPrice } from './useOrderPrice';
export function useMarginEquity(selector) {
    const { currentAccount, isMarginAccount } = useUserCurrentAccount();
    const { watch } = useFormContext();
    const [op, type, instrumentId, leverage] = watch([
        'op',
        'type',
        'instrumentId',
        'leverage',
    ]);
    const price = useOrderPrice();
    const equityPayload = useMemo(() => ({
        price,
        leverage: leverage,
        instrumentId,
        side: Number(op === 'sell'),
        orderType: type,
        accountId: currentAccount?.AccountId,
    }), [price, leverage, instrumentId, op, type, currentAccount?.AccountId]);
    return useGetMarginAccountEquityQuery(isMarginAccount && instrumentId ? equityPayload : skipToken, { selectFromResult: selector });
}
