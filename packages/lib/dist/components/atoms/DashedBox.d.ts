import React from 'react';
import { ViewProps } from 'react-native';
import {
  SpacingProps,
  SpacingShorthandProps,
  BackgroundColorProps,
  BackgroundColorShorthandProps,
  BorderProps,
  LayoutProps,
  PositionProps,
} from '@shopify/restyle';
import { Theme } from '../../theme';
type RestyleProps = SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  BackgroundColorProps<Theme> &
  BackgroundColorShorthandProps<Theme> &
  PositionProps<Theme> &
  Exclude<
    BorderProps<Theme>,
    | 'borderColor'
    | 'borderStyle'
    | 'borderWidth'
    | 'borderTopWidth'
    | 'borderBottomWidth'
  > &
  LayoutProps<Theme> &
  ViewProps;
type Props = {
  topDash?: boolean;
  bottomDash?: boolean;
  borderColor?: keyof Theme['colors'];
  children: React.ReactNode | React.ReactNode[];
} & RestyleProps;
export declare const DashedBox: ({
  topDash,
  bottomDash,
  borderColor,
  children,
  ...props
}: Props) => React.JSX.Element;
export {};
