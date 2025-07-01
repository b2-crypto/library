import React, { memo, useMemo } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { formatCurrency, formatNumber } from '../../../../helpers/format';
import { translate } from '../../../../helpers/i18n';
import { Box, Text } from '../../../../components/atoms';
import { BoxFormItem, FormAmountInput, FormDropdown, ProductIcon, } from '../../../../components/molecules';
import { testID } from '../../../../helpers/testId';
import { MaxButton } from '../atoms';
import { roundWithPrecision } from '../../../../helpers/math';
import { AMOUNT_INPUT_LIMIT } from '../../../../helpers/constants';
const createProductIcon = (symbol, disabled) => {
    const Icon = () => (<ProductIcon symbol={symbol} size={24} disabled={disabled}/>);
    return Icon;
};
const getFormattedAmountForDisplay = (amount, decimalPlaces) => {
    const roundedAmount = roundWithPrecision(amount, decimalPlaces);
    const formattedAmount = formatNumber(roundedAmount, decimalPlaces);
    return formattedAmount;
};
export const ProductAmountField = memo(({ assetFieldName, amountFieldName, label, showNotionalValue, products, defaultProductId, showMaxButton = false, suffix, onFocus, decimalPlaces, isLoading, isFocused, ignoreMaxLength = false, }) => {
    const { setValue, watch, control, trigger } = useFormContext();
    const productId = watch(assetFieldName);
    const { field: amountField } = useController({
        name: amountFieldName,
        control,
    });
    const product = useMemo(() => products.find(p => p.id === productId), [products, productId]);
    const options = useMemo(() => products.map(p => ({
        value: p.id,
        title: p.symbol,
        icon: createProductIcon(p.symbol, p.disabled || false),
        disabled: p.disabled,
    })), [products]);
    const footerContent = useMemo(() => {
        const formattedAmount = getFormattedAmountForDisplay(product?.amount || 0, product?.decimalPlaces || 2);
        return (<Text variant="bodyReg" accessible accessibilityLabel={`${label} — balance`} {...testID(`${label}Balance`)}>
          {formattedAmount}
          <Text variant="bodyReg" color="textSecondary">
            {' '}
            {translate('transactions.balance')}
          </Text>
        </Text>);
    }, [product, label]);
    return (<BoxFormItem label={label} labelExtra={showNotionalValue && (<Text variant="bodyReg" accessible accessibilityLabel={`${label} — notinal amount`} {...testID(`${label}NotionalAmount`)}>
              {product?.notionalRate &&
                product?.notionalSymbol &&
                amountField.value
                ? formatCurrency(product.notionalRate * (parseFloat(amountField.value) || 0), product.notionalSymbol, 2)
                : '—'}
            </Text>)} footer={footerContent}>
        <Box width="100%" flexDirection="row">
          <Box width={110} mr="xs">
            <FormDropdown name={assetFieldName} defaultValue={defaultProductId} items={options} width={110} isLoading={isLoading} rules={{
            onChange: () => {
                setValue(amountFieldName, undefined);
            },
        }}/>
          </Box>
          <FormAmountInput control={control} name={amountFieldName} decimalPlaces={decimalPlaces || product?.decimalPlaces} onFocus={onFocus} defaultValue={Number(0).toFixed(product?.decimalPlaces || 2)} maxLength={ignoreMaxLength
            ? undefined
            : isFocused
                ? AMOUNT_INPUT_LIMIT
                : amountField.value?.length > AMOUNT_INPUT_LIMIT
                    ? amountField.value?.length
                    : AMOUNT_INPUT_LIMIT} rules={{
            validate: v => !v ||
                !product?.amount ||
                parseFloat(v) <= product.amount ||
                'formError.lackOfFunds',
        }} suffix={suffix ||
            (showMaxButton && !!product?.amount && (<MaxButton onPress={() => {
                    if (product.amount) {
                        const maxValue = roundWithPrecision(product.amount, product.decimalPlaces);
                        setValue(amountFieldName, maxValue.toFixed(product.decimalPlaces));
                        trigger(amountFieldName);
                    }
                }} {...testID(`${label}MaxButton`)}/>))}/>
        </Box>
      </BoxFormItem>);
});
ProductAmountField.displayName = 'ProductAmountField';
