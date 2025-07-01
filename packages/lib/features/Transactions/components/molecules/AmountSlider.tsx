import React, { useMemo, useCallback, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import { SliderInput } from '../../../../components';
import { OrderFormValues } from '../../types';

const SLIDER_MARKERS = [0, 25, 50, 75, 100];

type Props = {
  maxQuantity: number;
  decimalPlaces: number;
};

export const AmountSlider = ({ maxQuantity, decimalPlaces }: Props) => {
  const { watch, setValue } = useFormContext<OrderFormValues>();

  const [quantity, anchored] = watch(['quantity', 'anchored']);

  // Init quantity
  useEffect(() => {
    if (quantity === undefined) {
      setValue('quantity', '0', {
        shouldDirty: false,
        shouldTouch: false,
      });
    }
  }, [quantity, setValue]);

  const sliderValue = useMemo(() => {
    const _quantity = quantity ? parseFloat(quantity) : 0;
    const maxAmount = maxQuantity;
    if (maxAmount > 0 && _quantity > 0) {
      const newSliderValue = (_quantity / maxAmount) * 100;
      return Math.min(Math.max(newSliderValue, 0), 100);
    }
    return 0;
  }, [quantity, maxQuantity]);

  const onSliderChange = useCallback(
    (v: number) => {
      const percentage = v || 0;
      const amount = maxQuantity * (percentage / 100);
      const nextQuantity = amount.toFixed(decimalPlaces);

      if (anchored !== 'quantity') {
        setValue('anchored', 'quantity');
      }

      setValue('quantity', nextQuantity, {
        shouldDirty: true,
        shouldTouch: true,
        shouldValidate: true,
      });
    },
    [maxQuantity, anchored, setValue, decimalPlaces],
  );

  return (
    <SliderInput
      value={sliderValue}
      onChange={onSliderChange}
      minValue={0}
      maxValue={100}
      step={0.1}
      markers={SLIDER_MARKERS}
    />
  );
};
