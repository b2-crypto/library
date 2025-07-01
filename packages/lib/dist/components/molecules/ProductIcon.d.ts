import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
export declare const getProductIcon: (symbol: string) =>
  | (React.ComponentType<import('react-native-svg').SvgProps> & {
      color: string;
    })
  | null;
type ProductIconProps = {
  symbol: string;
  size?: number;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};
export declare const ProductIcon: ({
  symbol,
  size,
  disabled,
  style,
}: ProductIconProps) => React.JSX.Element;
type ProductPairIconProps = {
  symbol1: string;
  symbol2: string;
  size?: number;
};
export declare const ProductPairIcon: ({
  symbol1,
  symbol2,
  size,
}: ProductPairIconProps) => React.JSX.Element;
export {};
