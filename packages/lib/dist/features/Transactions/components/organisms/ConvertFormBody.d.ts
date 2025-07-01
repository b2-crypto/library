import React from 'react';
import { AmountFieldAsset } from '../../types';
type Props = {
  /** Available products for From field (used for dropdown options) */
  fromProducts: Array<AmountFieldAsset>;
  /** Available products for To field (used for dropdown options) */
  toProducts: Array<AmountFieldAsset>;
  /** Default (initial) product ID for the From field */
  defaultFromProduct?: number;
  /** Default (initial) product ID for the To field */
  defaultToProduct?: number;
  /** Currently anchored field */
  anchored: 'from' | 'to' | null;
  /** Decimal places for the From value */
  fromDecimalPlaces?: number;
  /** Decimal places for the To value */
  toDecimalPlaces?: number;
  /** Callback to change new anchored field */
  setAnchored: (newValue: 'from' | 'to' | null) => void;
};
/**
 * Renders the form body (From and To fields) for the Convert form.
 */
export declare const ConvertFormBody: ({
  fromProducts,
  toProducts,
  defaultFromProduct,
  defaultToProduct,
  anchored,
  fromDecimalPlaces,
  toDecimalPlaces,
  setAnchored,
}: Props) => React.JSX.Element;
export {};
