import { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { skipToken } from '@reduxjs/toolkit/query';
import type {
  TypedUseQueryStateResult,
  BaseQueryFn,
} from '@reduxjs/toolkit/dist/query/react';

import type { OrderFormValues } from '../types';
import { useUserCurrentAccount } from '../../../hooks';
import {
  useGetAccountPositionsQuery,
  useGetInstrumentsQuery,
} from '../../../services';

import { useMarginEquity } from './useMarginEquity';

type EquityRequestResult = TypedUseQueryStateResult<
  { MaxAmount: number },
  unknown,
  BaseQueryFn
>;

const maxAmountSelector = (result: EquityRequestResult) => ({
  maxAmount: result.data?.MaxAmount ?? 0,
});

export function useMaxQuantity(): number {
  const { currentAccount, isMarginAccount } = useUserCurrentAccount();
  const { watch } = useFormContext<OrderFormValues>();

  const [op, instrumentId] = watch(['op', 'instrumentId']);

  const { data: instruments } = useGetInstrumentsQuery(
    isMarginAccount ? skipToken : undefined,
  );
  const { data: positions } = useGetAccountPositionsQuery(
    isMarginAccount ? skipToken : { accountId: currentAccount?.AccountId! },
  );

  const spotMaxQuantity = useMemo(() => {
    if (!positions || isMarginAccount) {
      return 0;
    }
    const instrument = instruments?.find(i => i.InstrumentId === instrumentId);
    const productId = instrument?.[op === 'buy' ? 'Product2' : 'Product1'];
    const position = positions.find(p => p.ProductId === productId);
    return position ? position.Amount - position.Hold : 0;
  }, [positions, instrumentId, op, isMarginAccount, instruments]);

  const { maxAmount: maxMarginAmount } = useMarginEquity(maxAmountSelector);

  return isMarginAccount ? maxMarginAmount : spotMaxQuantity;
}
