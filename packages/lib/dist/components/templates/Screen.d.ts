import React from 'react';
import { NativeSafeAreaViewProps } from 'react-native-safe-area-context';
import {
  BackgroundColorProps,
  BackgroundColorShorthandProps,
  SpacingProps,
  SpacingShorthandProps,
  LayoutProps,
} from '@shopify/restyle';
import { Theme } from '../../theme';
type RestyleProps = BackgroundColorProps<Theme> &
  BackgroundColorShorthandProps<Theme> &
  LayoutProps<Theme> &
  SpacingProps<Theme> &
  SpacingShorthandProps<Theme>;
type ScreenProps = Pick<NativeSafeAreaViewProps, 'children' | 'mode' | 'edges'>;
export declare const Screen: ({
  children,
  mode,
  edges,
  ...rest
}: ScreenProps & RestyleProps) => React.JSX.Element;
export {};
