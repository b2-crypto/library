import React, { ReactNode } from 'react';
import { BoxProps } from '@shopify/restyle';
import { Theme } from '../../theme';
import { ImageProps } from 'react-native';
type Props = {
  children: ReactNode;
  source?: ImageProps['source'];
} & BoxProps<Theme>;
export declare const ItemWithBg: ({
  children,
  borderRadius,
  source,
  ...boxProps
}: Props) => React.JSX.Element;
export {};
