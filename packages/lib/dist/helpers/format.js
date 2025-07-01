import { numericFormatter } from 'react-number-format';
export const formatNumber = (value, decimalPlaces = 2, fixedDecimalScale = false) => numericFormatter(value.toFixed(decimalPlaces), {
    thousandSeparator: true,
    decimalScale: decimalPlaces,
    fixedDecimalScale,
});
export const formatUSD = (value) => numericFormatter(value.toFixed(2), {
    prefix: '$',
    decimalScale: 2,
    thousandSeparator: true,
    fixedDecimalScale: true,
});
export const formatCrypto = (value, decimalPlaces = 8, cryptoSymbol, fixedDecimalScale = true) => {
    let cryptoValue = formatNumber(value, decimalPlaces, fixedDecimalScale);
    if (cryptoSymbol) {
        cryptoValue += ' ' + cryptoSymbol;
    }
    return cryptoValue;
};
export const formatCurrency = (value, currency = 'USD', decimalPlaces = 2, fixedDecimalScale = false) => {
    if (currency === 'USD') {
        return formatUSD(value);
    }
    return formatCrypto(value, decimalPlaces, currency, fixedDecimalScale);
};
/**
 * Converts Price/Quantity Increment to expected (int) decimalPlaces.
 *  i.e., Xe-8 => 8.
 */
export const increment2digits = (increment) => {
    if (!increment || increment >= 1) {
        return 0;
    }
    return parseFloat(increment.toExponential().split('-')[1]);
};
