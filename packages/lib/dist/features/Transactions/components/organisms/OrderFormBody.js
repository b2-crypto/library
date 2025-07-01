import React from 'react';
import { useFormContext } from 'react-hook-form';
import { StyleSheet } from 'react-native';
import { AMOUNT_INPUT_LIMIT } from '../../../../helpers/constants';
import { translate } from '../../../../helpers/i18n';
import { Box, Text } from '../../../../components/atoms';
import { FormAmountInput } from '../../../../components/molecules';
import { testID } from '../../../../helpers/testId';
import { AmountField, AmountSlider, TifField, } from '../molecules';
import { LeverageWidget } from './LeverageWidget';
const style = StyleSheet.create({
    leverageWidget: {
        marginTop: 8,
    },
});
export const OrderFormBody = ({ product1, product2, orderPrice, maxQuantity, isMarginAccount, }) => {
    const { watch, control } = useFormContext();
    const [orderType] = watch(['type']);
    return (<>
      {product1 && product2 ? (<Box flexDirection="column" padding="m" gap="sm">
          {(orderType === 'StopMarket' || orderType === 'StopLimit') && (<FormAmountInput control={control} symbol={product2.symbol} decimalPlaces={product2.decimalPlaces} name="stopPrice" label={translate('transaction.fields.stopPrice')} placeholder="0" maxLength={AMOUNT_INPUT_LIMIT}/>)}
          {(orderType === 'Limit' || orderType === 'StopLimit') && (<FormAmountInput control={control} symbol={product2.symbol} decimalPlaces={product2.decimalPlaces} name="limit" label={translate('limitPrice')} placeholder="0" maxLength={AMOUNT_INPUT_LIMIT}/>)}
          <AmountField product1={product1} product2={product2} orderPrice={orderPrice} maxQuantity={maxQuantity}/>
          <Box flexDirection="row" gap="m" paddingBottom="xs">
            <Box flexGrow={1} px="s">
              <AmountSlider maxQuantity={maxQuantity} decimalPlaces={product1.decimalPlaces}/>
            </Box>
            {isMarginAccount && <LeverageWidget style={style.leverageWidget}/>}
          </Box>
          {(orderType === 'Limit' ||
                orderType === 'StopLimit' ||
                orderType === 'StopMarket') && <TifField />}
        </Box>) : (<Box height={100} justifyContent="center" alignItems="center" m="xl">
          <Text textAlign="center" accessible accessibilityLabel="Select assect" {...testID('selectAsset')}>
            {translate('transaction.empty')}
          </Text>
        </Box>)}
    </>);
};
