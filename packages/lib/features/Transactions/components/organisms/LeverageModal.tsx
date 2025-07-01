import React, { useCallback, useMemo, useState } from 'react';

import {
  Box,
  Button,
  CardModal,
  SliderInput,
  Text,
} from '../../../../components';
import { translate } from '../../../../helpers';

const formatSliderValue = (value: number) => `${value}x`;

type Props = {
  leverage: number;
  maxValue: number;
  isVisible: boolean;
  onClose: () => void;
  onConfirm: (value: number) => void;
  isBuy?: boolean;
};

export const LeverageModal = ({
  leverage,
  isVisible,
  onClose,
  onConfirm,
  maxValue,
  isBuy = true,
}: Props) => {
  const [value, setValue] = useState(leverage ?? 0);
  const breakpoints = useMemo(
    () =>
      maxValue && maxValue <= 10
        ? Array.from({ length: maxValue - 1 }, (_, i) => i + 2)
        : [2, maxValue],
    [maxValue],
  );

  const cancel = useCallback(() => {
    setValue(leverage ?? 0);
    onClose();
  }, [onClose, leverage]);

  return (
    <CardModal
      isVisible={isVisible}
      heading={translate('transaction.leverage.heading')}
      onClose={cancel}
      footer={<Button label="Confirm" onPress={() => onConfirm(value)} />}>
      <Box m="m" gap="m" position="relative">
        <Box
          padding="s"
          flexDirection="row"
          justifyContent="space-between"
          backgroundColor="formBackground">
          <Text variant="captionReg" color="textSecondary">
            Selected Leverage
          </Text>
          <Text variant="captionReg" color="textSecondary" fontWeight="bold">
            {value}x
          </Text>
        </Box>
        <SliderInput
          value={value}
          onChange={setValue}
          minValue={breakpoints[0]}
          maxValue={breakpoints[breakpoints.length - 1]}
          step={1}
          markers={breakpoints}
          formatValue={formatSliderValue}
          displayValue={false}
        />
        <Text variant="captionReg" color="textSecondary">
          {translate('transaction.leverage.description', {
            name: (
              <Text variant="captionBold" color="textSecondary">
                {isBuy
                  ? translate('transaction.summary.maxBuyAmount')
                  : translate('transaction.summary.maxSellAmount')}
              </Text>
            ),
          })}
        </Text>
      </Box>
    </CardModal>
  );
};
