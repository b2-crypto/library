import { useMemo } from 'react';
import camelCase from 'lodash/camelCase';

import { formatCrypto, increment2digits } from '../../../helpers/format';
import { translate } from '../../../helpers/i18n';
import { useGetInstrumentsQuery } from '../../../services/apexApi';
import { IInstrument } from '../../../types/apiResponses';
import { OrderFormValues } from '../types';

import { useOrderSummary } from './useOrderSummary';

type SummaryItem = {
  amount: string;
  symbol: string;
} | null;

type OrderSummary = {
  market: SummaryItem;
  fee: SummaryItem;
  totalPrice: SummaryItem;
  net: SummaryItem;
};

type ConfirmItem = {
  label: string;
  value: string;
};

const getPriceLabel = (orderType: string): string => {
  if (orderType === 'Limit' || orderType === 'StopLimit') {
    return translate('transaction.summary.limitPrice');
  }
  if (orderType === 'StopMarket') {
    return translate('transaction.summary.stopPrice');
  }
  return translate('price');
};

const getPriceValue = (
  orderType: string,
  summary: OrderSummary,
  instrument: IInstrument,
  values: OrderFormValues,
): string => {
  if (orderType === 'Market') {
    return summary.market
      ? formatCrypto(
          parseFloat(summary.market.amount),
          increment2digits(instrument.PriceIncrement),
          summary.market.symbol,
        )
      : '—';
  }

  if (orderType === 'Limit' || orderType === 'StopLimit') {
    return formatCrypto(
      parseFloat(values.limit!),
      increment2digits(instrument.PriceIncrement),
      instrument.Product2Symbol,
    );
  }

  if (orderType === 'StopMarket') {
    return formatCrypto(
      parseFloat(values.stopPrice!),
      increment2digits(instrument.PriceIncrement),
      instrument.Product2Symbol,
    );
  }

  return '—';
};

const getBaseItems = (values: OrderFormValues): ConfirmItem[] => [
  {
    label: translate('orderType'),
    value: translate(`transaction.summary.orderType.${camelCase(values.type)}`),
  },
];

const getTifItem = (values: OrderFormValues): ConfirmItem | null => {
  if (values.type !== 'Limit' && values.type !== 'StopLimit') {
    return null;
  }

  return {
    label: translate('tif'),
    value: translate(`transaction.tif.${values.tif?.toLowerCase() || 'gtc'}`),
  };
};

const getQuantityItem = (
  values: OrderFormValues,
  instrument: IInstrument,
  marketByValue: boolean,
  formattedQuantity: string,
): ConfirmItem => ({
  label: translate('transaction.summary.quantity'),
  value: marketByValue
    ? formatCrypto(
        parseFloat(values.value),
        increment2digits(instrument.PriceIncrement),
        instrument.Product2Symbol,
      )
    : formattedQuantity,
});

const getValueItem = (
  marketByValue: boolean,
  formattedQuantity: string,
): ConfirmItem | null => {
  if (!marketByValue) {
    return null;
  }

  return {
    label: translate('transaction.summary.value'),
    value: formattedQuantity,
  };
};

const getSummaryItems = (
  summary: OrderSummary,
  instrument: IInstrument,
  priceLabel: string,
  priceValue: string,
): ConfirmItem[] => [
  {
    label: priceLabel,
    value: priceValue,
  },
  {
    label: translate('transaction.summary.fee'),
    value: summary.fee
      ? formatCrypto(
          parseFloat(summary.fee.amount),
          increment2digits(instrument.PriceIncrement),
          summary.fee.symbol,
        )
      : '—',
  },
  {
    label: translate('transaction.summary.netReceiving'),
    value: summary.net
      ? formatCrypto(
          parseFloat(summary.net.amount),
          increment2digits(instrument.PriceIncrement),
          summary.net.symbol,
        )
      : '—',
  },
  {
    label: translate('transaction.summary.total'),
    value: summary.totalPrice
      ? formatCrypto(
          parseFloat(summary.totalPrice.amount),
          increment2digits(instrument.PriceIncrement),
          summary.totalPrice.symbol,
        )
      : '—',
  },
];

export function useOrderConfirmValues(values: OrderFormValues) {
  const { instrument } = useGetInstrumentsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      instrument: data?.find(i => i.InstrumentId === values.instrumentId),
    }),
    skip: !values.instrumentId,
  });

  const summary = useOrderSummary(values);
  const marketByValue = values.type === 'Market' && values.anchored === 'value';
  const formattedQuantity = formatCrypto(
    parseFloat(values.quantity),
    increment2digits(instrument!.QuantityIncrement),
    instrument!.Product1Symbol,
  );

  const confirmItems = useMemo(() => {
    if (!instrument) {
      return [];
    }

    const priceLabel = getPriceLabel(values.type);
    const priceValue = getPriceValue(values.type, summary, instrument, values);

    const items = getBaseItems(values);
    const tifItem = getTifItem(values);
    if (tifItem) {
      items.push(tifItem);
    }

    items.push(
      getQuantityItem(values, instrument, marketByValue, formattedQuantity),
    );

    const valueItem = getValueItem(marketByValue, formattedQuantity);
    if (valueItem) {
      items.push(valueItem);
    }

    return items.concat(
      getSummaryItems(summary, instrument, priceLabel, priceValue),
    );
  }, [values, summary, formattedQuantity, instrument, marketByValue]);

  return { instrument, confirmItems };
}
