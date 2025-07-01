import React from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { useFormContext } from 'react-hook-form';

import { Button, Text } from '../../../../components';
import { useModalControl } from '../../../../hooks';
import { useLeverage } from '../../hooks/useLeverage';
import { translate } from '../../../../helpers';

import { LeverageModal } from './LeverageModal';

export const LeverageWidget = ({ style }: { style?: StyleProp<ViewStyle> }) => {
  const { watch } = useFormContext<{
    op: 'buy' | 'sell';
  }>();
  const op = watch('op');

  const { leverage, maxLeverage, setLeverage, noLeverage, disabled } =
    useLeverage();
  const { modalVisible, showModal, hideModal } = useModalControl();

  return (
    <>
      {noLeverage ? (
        <Text
          variant="captionBold"
          color="textSecondary"
          py="xs"
          style={[styles.text]}>
          {translate('transaction.leverage.noLeverage')}
        </Text>
      ) : (
        <Button
          size="big"
          variant="leverage"
          minWidth={44}
          disabled={disabled}
          onPress={showModal}
          label={`${leverage}x`}
          style={style}
        />
      )}
      <LeverageModal
        isBuy={op === 'buy'}
        leverage={leverage}
        maxValue={maxLeverage}
        isVisible={modalVisible}
        onClose={hideModal}
        onConfirm={value => {
          hideModal();
          setLeverage(value);
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: 'auto',
  },
});
