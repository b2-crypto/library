import { useMemo } from 'react';
import { skipToken } from '@reduxjs/toolkit/dist/query';

import { formatNumber, increment2digits } from '../../../helpers/format';
import {
  useGetInstrumentsQuery,
  useGetL2SnapshotQuery,
  useGetLevel1SummaryQuery,
  useGetOrderFeeQuery,
  useGetProductsQuery,
  useGetUserInfoQuery,
} from '../../../services/apexApi';
import { selectUser } from '../../../stores/auth';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { OrderFormValues, ORDER_TYPES } from '../types';
import { useDebounce } from '../../../hooks';

import { useOrderFormValidationContext } from './useOrderFormValidationContext';

const QUERY_POLLING_INTERVAL_MS = 5000;

export function useOrderSummary(values: Partial<OrderFormValues>) {
  const hasSummary = !!values.instrumentId && !!values.quantity;
  const side = Number(values.op === 'sell');
  const quantity = useDebounce(parseFloat(values.quantity || '0'), 300);
  const value = useDebounce(parseFloat(values.value || '0'), 300);
  const marketByValue = values.type === 'Market' && values.anchored === 'value';
  const isMarginAccount = useOrderFormValidationContext().value.isMarginAccount;

  const user = useAppSelector(selectUser);
  const { data: userInfo } = useGetUserInfoQuery(
    user ? { userId: user.UserId } : skipToken,
  );
  const { instrument } = useGetInstrumentsQuery(
    hasSummary ? undefined : skipToken,
    {
      selectFromResult: ({ data }) => ({
        instrument: data?.find(i => i.InstrumentId === values.instrumentId),
      }),
      skip: !values.instrumentId,
    },
  );

  //#region MarketPrice
  const { level1 } = useGetLevel1SummaryQuery(
    hasSummary ? undefined : skipToken,
    {
      pollingInterval: QUERY_POLLING_INTERVAL_MS,
      selectFromResult: ({ data }) => ({
        level1: data?.find(l => l.InstrumentId === values.instrumentId),
      }),
    },
  );

  const marketItem =
    hasSummary && level1 && instrument
      ? {
          amount: formatNumber(
            values.op === 'buy' ? level1.BestOffer : level1.BestBid,
            increment2digits(instrument.PriceIncrement),
            true,
          ),
          symbol: instrument.Product2Symbol,
        }
      : null;
  //#endregion

  //#region Fee
  const priceForFee = useMemo(() => {
    switch (values.type) {
      case 'Market':
        return (values.op === 'buy' ? level1?.BestOffer : level1?.BestBid) || 0;
      case 'Limit':
        return parseFloat(values.limit || '') || 0;
      case 'StopMarket':
        return parseFloat(values.stopPrice || '') || 0;
      default:
        return 0;
    }
  }, [level1, values.type, values.limit, values.stopPrice, values.op]);

  const amountForFee = useMemo(() => {
    return marketByValue && priceForFee ? value / priceForFee : quantity;
  }, [value, marketByValue, priceForFee, quantity]);

  const makerTaker = useMemo(() => {
    if (values.type === 'Market' || values.type === 'StopMarket') {
      return 'Taker' as const;
    }
    if (!level1?.BestOffer || !level1?.BestBid) {
      return undefined;
    }
    if (values.op === 'buy') {
      return priceForFee < level1?.BestOffer || level1?.BestOffer === 0
        ? ('Maker' as const)
        : ('Taker' as const);
    } else {
      return priceForFee > level1?.BestBid || Number(level1?.BestBid) === 0
        ? ('Maker' as const)
        : ('Taker' as const);
    }
  }, [level1, priceForFee, values.op, values.type]);

  const { data: feeInfo } = useGetOrderFeeQuery(
    userInfo?.AccountId &&
      values.instrumentId &&
      values.type &&
      amountForFee &&
      instrument
      ? {
          OMSId: 1,
          AccountId: userInfo.AccountId,
          InstrumentId: values.instrumentId,
          Amount: amountForFee,
          Quantity: amountForFee,
          Price: priceForFee,
          OrderType: ORDER_TYPES.indexOf(values.type) + 1,
          Side: side,
          MakerTaker: makerTaker,
        }
      : skipToken,
  );

  const { feeProduct } = useGetProductsQuery(undefined, {
    skip: !feeInfo?.ProductId,
    selectFromResult: ({ data }) => {
      return {
        feeProduct: data?.find(p => p.ProductId === feeInfo?.ProductId),
      };
    },
  });

  const orderFee = feeInfo?.OrderFee || 0;

  const feeItem =
    hasSummary && orderFee
      ? {
          amount: formatNumber(orderFee, feeProduct?.DecimalPlaces, true),
          symbol: feeProduct?.Product || '',
        }
      : null;
  //#endregion

  //#region Total Price
  const { totalPrice: marketTotalPrice } = useGetL2SnapshotQuery(
    values.instrumentId && values.type === 'Market' && !marketByValue
      ? { instrumentId: values.instrumentId }
      : skipToken,
    {
      pollingInterval: QUERY_POLLING_INTERVAL_MS,
      selectFromResult: ({ data }) => {
        const orders =
          data
            // for buy transaction we should look for sell orders and vice versa
            ?.filter(i => i.side === Number(values.op === 'buy'))
            .sort((a, b) =>
              values.op === 'buy' ? a.price - b.price : b.price - a.price,
            ) || [];

        let totalPrice = 0,
          leftQuantity = quantity,
          i = 0;

        // calculate the total price of the order based on available orders on
        // the market taking into account the quantity of market orders and
        // the amount a user wants to buy / sell
        while (leftQuantity > 0 && orders.length >= i + 1) {
          const order = orders[i++];
          const stepQuantity = Math.min(leftQuantity, order.quantity);
          totalPrice += order.price * stepQuantity;
          leftQuantity -= stepQuantity;
        }

        if (leftQuantity > 0 && orders.length && i !== 0) {
          totalPrice += leftQuantity * orders[i - 1].price;
        }

        return { totalPrice };
      },
    },
  );

  const totalPrice = useMemo(() => {
    switch (values.type) {
      case 'Market':
        return marketByValue || isMarginAccount ? value : marketTotalPrice;
      case 'Limit':
      case 'StopLimit':
        return parseFloat(values.limit || '0') * quantity;
      case 'StopMarket':
        return parseFloat(values.stopPrice || '0') * quantity;
      default:
        return 0;
    }
  }, [
    values,
    marketTotalPrice,
    quantity,
    marketByValue,
    value,
    isMarginAccount,
  ]);

  const totalPriceItem =
    hasSummary && instrument
      ? {
          amount: formatNumber(
            totalPrice,
            increment2digits(instrument.PriceIncrement),
            true,
          ),
          symbol: instrument.Product2Symbol,
        }
      : null;
  //#endregion

  //#region Net
  const netItem =
    hasSummary && instrument
      ? {
          amount: formatNumber(
            values.op === 'buy'
              ? quantity -
                  (feeInfo?.ProductId === instrument.Product1 ? orderFee : 0)
              : totalPrice -
                  (feeInfo?.ProductId === instrument.Product2 ? orderFee : 0),
            increment2digits(
              values.op === 'buy'
                ? instrument.QuantityIncrement
                : instrument.PriceIncrement,
            ),
            true,
          ),
          symbol:
            values.op === 'buy'
              ? instrument.Product1Symbol
              : instrument.Product2Symbol,
        }
      : null;
  //#endregion

  return {
    market: marketItem,
    fee: feeItem,
    totalPrice: totalPriceItem,
    net: netItem,
  };
}
