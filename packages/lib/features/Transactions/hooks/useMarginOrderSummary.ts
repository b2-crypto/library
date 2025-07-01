import { useMemo } from 'react';

import { roundWithPrecision } from '../../../helpers';
import { OrderFormValues } from '../types';
import { useGetAllMarginProductConfigsQuery } from '../../../services';

import { useOrderProducts } from './useOrderProducts';
import { useOrderFormValidationContext } from './useOrderFormValidationContext';

export function useMarginOrderSummary(values: Partial<OrderFormValues>) {
  const { product1, product2 } = useOrderProducts();

  //#region Borrowing Power
  const isBuy = values.op === 'buy';
  const rawValue = isBuy ? values.value : values.quantity;
  const value = rawValue ? parseFloat(rawValue) : undefined;
  const balance = (isBuy ? product2?.amount : product1?.amount) ?? 0;
  const decimals =
    (isBuy ? product2?.decimalPlaces : product1?.decimalPlaces) ?? 2;
  const symbol = (isBuy ? product2?.symbol : product1?.symbol) ?? '';

  const borrowingAmount = useMemo(
    () =>
      value
        ? {
            amount: roundWithPrecision(
              Math.max(0, value - balance),
              decimals,
            ).toString(),
            symbol,
          }
        : null,
    [value, balance, decimals, symbol],
  );
  //#endregion

  //# Max Buy/Sell Amount
  const { value: validationContext } = useOrderFormValidationContext();
  const maxAmount = useMemo(
    () =>
      validationContext.maxAmount
        ? {
            amount: roundWithPrecision(
              validationContext.maxAmount,
              product1?.decimalPlaces ?? 2,
            ).toString(),
            symbol: product1?.symbol ?? '',
          }
        : null,
    [product1?.decimalPlaces, product1?.symbol, validationContext.maxAmount],
  );
  //#endregion

  //#region Hourly Interest
  const { data: hourlyInterestValue } = useGetAllMarginProductConfigsQuery(
    undefined,
    {
      selectFromResult: ({ data }) => ({
        data:
          data?.find(
            config =>
              config.ProductId === (isBuy ? product2?.id : product1?.id),
          )?.HourlyInterestRate ?? 0,
      }),
    },
  );
  const hourlyInterest = useMemo(
    () =>
      hourlyInterestValue
        ? {
            amount: roundWithPrecision(hourlyInterestValue * 100, 8) + '%',
            symbol: '',
          }
        : null,
    [hourlyInterestValue],
  );
  //#endregion

  return { borrowingAmount, maxAmount, hourlyInterest };
}
