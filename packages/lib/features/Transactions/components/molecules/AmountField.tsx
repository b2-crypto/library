import React, { useCallback, useEffect, useMemo } from 'react';
import { useController, useFormContext } from 'react-hook-form';

import { AMOUNT_INPUT_LIMIT } from '../../../../helpers/constants';
import { translate } from '../../../../helpers/i18n';
import { formatInputCurrency } from '../../../../helpers';
import { OrderFormValues } from '../../types';
import {
  Box,
  CurrencyPill,
  FormItem,
  Input,
  Text,
} from '../../../../components/atoms';
import { roundWithPrecision } from '../../../../helpers/math';
import { MaxButton } from '../atoms';

export type AmountFieldProps = {
  /** Left product (Product1) of the instrument (symbol, amount user owns and decimal places to round the amount) */
  product1: { symbol: string; amount: number; decimalPlaces: number };
  /** Right product (roduct2) of the instrument (symbol, amount user owns and decimal places to round the amount) */
  product2: { symbol: string; amount: number; decimalPlaces: number };
  /** Current market price for the selected instrument */
  orderPrice: number;
  /** Maximum quantity allowed for the transaction */
  maxQuantity: number;
};

export const AmountField = ({
  product1,
  product2,
  orderPrice: price,
  maxQuantity,
}: AmountFieldProps) => {
  const { watch, control, setValue, setFocus } =
    useFormContext<OrderFormValues>();

  const [op, type, limit, stopPrice, anchored] = watch([
    'op',
    'type',
    'limit',
    'stopPrice',
    'anchored',
  ]);

  const {
    field: {
      value: quantityFieldValue,
      ref: quantityFieldRef,
      onChange: onQuantityChange,
    },
    fieldState: quantityState,
  } = useController({
    name: 'quantity',
    control,
  });

  const {
    field: {
      value: valueFieldValue,
      ref: valueFieldRef,
      onChange: onValueChange,
    },
    fieldState: valueState,
  } = useController({
    name: 'value',
    control,
  });

  const maxValue = maxQuantity * price;

  useEffect(() => {
    if (anchored === 'quantity') {
      const p1Quantity = parseFloat(quantityFieldValue) || 0;

      //do nothing
      if (p1Quantity === 0) {
        return;
      }

      let p2Value: number | null = null;

      if (type === 'Market' && price) {
        p2Value = p1Quantity * price;
      } else if (type === 'Limit' && limit) {
        p2Value = p1Quantity * (parseFloat(limit) || 0);
      } else if (type === 'StopMarket' && stopPrice) {
        p2Value = p1Quantity * (parseFloat(stopPrice) || 0);
      }

      if (typeof p2Value === 'number') {
        onValueChange(
          roundWithPrecision(p2Value, product2.decimalPlaces).toString(),
        );
      }
    }
  }, [
    quantityFieldValue,
    op,
    price,
    product2.decimalPlaces,
    type,
    limit,
    stopPrice,
    anchored,
    onValueChange,
    setFocus,
  ]);

  useEffect(() => {
    if (anchored === 'value') {
      const p2Value = parseFloat(valueFieldValue) || 0;

      //do nothing
      if (p2Value === 0) {
        return;
      }

      let p1Quantity: number | null = null;

      if (type === 'Market' && price) {
        p1Quantity = p2Value / price;
      } else if (type === 'Limit' && limit) {
        p1Quantity = p2Value / (parseFloat(limit) || 0);
      }

      if (typeof p1Quantity === 'number') {
        onQuantityChange(
          roundWithPrecision(p1Quantity, product1.decimalPlaces).toString(),
        );
      }
    }
  }, [
    valueFieldValue,
    op,
    price,
    product1.decimalPlaces,
    type,
    limit,
    anchored,
    onQuantityChange,
    setFocus,
  ]);

  const firstError = quantityState.error?.message
    ? translate(quantityState.error.message)
    : undefined;

  const secondError = valueState.error?.message
    ? translate(valueState.error.message)
    : undefined;

  const estimatedText = useMemo(
    () => (
      <Text variant="captionReg" color="textSecondary">
        {translate('transactions.estimated_suffix')}
      </Text>
    ),
    [],
  );

  const quantitySuffix = useMemo(
    () =>
      anchored === 'quantity' && maxQuantity ? (
        <MaxButton
          onPress={() => {
            onQuantityChange(
              roundWithPrecision(
                maxQuantity,
                product1.decimalPlaces,
              ).toString(),
            );
          }}
        />
      ) : anchored === 'value' ? (
        estimatedText
      ) : undefined,
    [
      anchored,
      maxQuantity,
      onQuantityChange,
      product1.decimalPlaces,
      estimatedText,
    ],
  );

  const valueSuffix = useMemo(
    () =>
      anchored === 'value' && maxValue ? (
        <MaxButton
          onPress={() => {
            onQuantityChange(
              roundWithPrecision(
                maxQuantity,
                product1.decimalPlaces,
              ).toString(),
            );
            onValueChange(
              roundWithPrecision(maxValue, product2.decimalPlaces).toString(),
            );
          }}
        />
      ) : anchored === 'quantity' ? (
        estimatedText
      ) : undefined,
    [
      anchored,
      maxQuantity,
      maxValue,
      product1.decimalPlaces,
      product2.decimalPlaces,
      estimatedText,
      onValueChange,
      onQuantityChange,
    ],
  );

  const quantityBoxProps = useCallback(
    ({ isFocused }: { isFocused: boolean }) => ({
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      zIndex: Number(!!(firstError || isFocused)),
    }),
    [firstError],
  );

  const valueBoxProps = useCallback(
    ({ isFocused }: { isFocused: boolean }) => ({
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      zIndex: Number(!!secondError || isFocused),
      style: { marginTop: -1 },
    }),
    [secondError],
  );

  const onChangeTextQuantity = useCallback(
    (rawValue: string) => {
      const value = formatInputCurrency(rawValue, product1.decimalPlaces);
      onQuantityChange(value);
    },
    [onQuantityChange, product1.decimalPlaces],
  );

  const onChangeTextValue = useCallback(
    (rawValue: string) => {
      const value = formatInputCurrency(rawValue, product2.decimalPlaces);
      onValueChange(value);
    },
    [onValueChange, product2.decimalPlaces],
  );

  const onFocusQuantity = useCallback(
    () => setValue('anchored', 'quantity'),
    [setValue],
  );

  const onFocusValue = useCallback(
    () => setValue('anchored', 'value'),
    [setValue],
  );

  const quantityPrefix = useMemo(
    () => <CurrencyPill symbol={product1.symbol} />,
    [product1.symbol],
  );

  const valuePrefix = useMemo(
    () => <CurrencyPill symbol={product2.symbol} />,
    [product2.symbol],
  );

  return (
    <FormItem
      label={`${translate('amount')}:`}
      error={firstError || secondError}>
      <Box>
        <Input
          size="big"
          ref={quantityFieldRef}
          value={quantityFieldValue}
          hasError={!!firstError}
          inputMode="decimal"
          onChangeText={onChangeTextQuantity}
          prefix={quantityPrefix}
          suffix={quantitySuffix}
          onFocus={onFocusQuantity}
          boxProps={quantityBoxProps}
          maxLength={
            anchored === 'quantity'
              ? AMOUNT_INPUT_LIMIT
              : quantityFieldValue?.length > AMOUNT_INPUT_LIMIT
              ? quantityFieldValue?.length
              : AMOUNT_INPUT_LIMIT
          }
          placeholder="0"
        />
        <Input
          size="big"
          ref={valueFieldRef}
          value={valueFieldValue}
          hasError={!!secondError}
          inputMode="decimal"
          onChangeText={onChangeTextValue}
          prefix={valuePrefix}
          suffix={valueSuffix}
          onFocus={onFocusValue}
          boxProps={valueBoxProps}
          maxLength={
            anchored === 'value'
              ? AMOUNT_INPUT_LIMIT
              : valueFieldValue?.length > AMOUNT_INPUT_LIMIT
              ? valueFieldValue?.length
              : AMOUNT_INPUT_LIMIT
          }
          placeholder="0"
        />
      </Box>
    </FormItem>
  );
};
