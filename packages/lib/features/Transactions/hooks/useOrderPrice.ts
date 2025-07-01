import { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { createSelector } from '@reduxjs/toolkit';
import {
  type BaseQueryFn,
  type TypedUseQueryStateResult,
  skipToken,
} from '@reduxjs/toolkit/query/react';

import { useGetLevel1SummaryQuery } from '../../../services/apexApi';
import { ILevel1 } from '../../../types';
import { OrderFormValues } from '../types';

type Level1Result = TypedUseQueryStateResult<ILevel1[], unknown, BaseQueryFn>;

export function useMarketPrice() {
  const { watch } = useFormContext<OrderFormValues>();
  const [instrumentId, type, op] = watch(['instrumentId', 'type', 'op']);

  const marketPriceSelector = useMemo(
    () =>
      createSelector(
        (result: Level1Result) => result.data,
        (data: ILevel1[] | undefined) => ({
          marketPrice: data?.find(i => i.InstrumentId === instrumentId)?.[
            op === 'buy' ? 'BestOffer' : 'BestBid'
          ],
        }),
      ),
    [instrumentId, op],
  );

  const { marketPrice = 0 } = useGetLevel1SummaryQuery(
    instrumentId && type === 'Market' ? undefined : skipToken,
    {
      pollingInterval: 3000,
      selectFromResult: marketPriceSelector,
    },
  );

  return marketPrice;
}

export function useOrderPrice() {
  const { watch } = useFormContext<OrderFormValues>();
  const [type, limit, stopPrice] = watch(['type', 'limit', 'stopPrice']);

  const marketPrice = useMarketPrice();

  return type === 'Market'
    ? marketPrice
    : type === 'Limit'
    ? parseFloat(limit || '0') || 0
    : parseFloat(stopPrice || '0') || 0;
}
