import React from 'react';
import { AmountFieldAsset } from '../../types';
import { FormAmountInput } from '../../../../components/molecules';
type Props = {
  assetFieldName: string;
  amountFieldName: string;
  label: string;
  showNotionalValue?: boolean;
  products: Array<AmountFieldAsset>;
  defaultProductId?: number;
  showMaxButton?: boolean;
  suffix?: React.ReactNode;
  onFocus?: React.ComponentProps<typeof FormAmountInput>['onFocus'];
  decimalPlaces?: number;
  isLoading?: boolean;
  isFocused?: boolean;
  ignoreMaxLength?: boolean;
};
export declare const ProductAmountField: React.MemoExoticComponent<
  ({
    assetFieldName,
    amountFieldName,
    label,
    showNotionalValue,
    products,
    defaultProductId,
    showMaxButton,
    suffix,
    onFocus,
    decimalPlaces,
    isLoading,
    isFocused,
    ignoreMaxLength,
  }: Props) => React.JSX.Element
>;
export {};
