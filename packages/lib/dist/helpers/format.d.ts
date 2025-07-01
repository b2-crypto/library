export declare const formatNumber: (
  value: number,
  decimalPlaces?: number,
  fixedDecimalScale?: boolean,
) => string;
export declare const formatUSD: (value: number) => string;
export declare const formatCrypto: (
  value: number,
  decimalPlaces?: number,
  cryptoSymbol?: string,
  fixedDecimalScale?: boolean,
) => string;
export declare const formatCurrency: (
  value: number,
  currency?: string,
  decimalPlaces?: number,
  fixedDecimalScale?: boolean,
) => string;
/**
 * Converts Price/Quantity Increment to expected (int) decimalPlaces.
 *  i.e., Xe-8 => 8.
 */
export declare const increment2digits: (increment: number) => number;
