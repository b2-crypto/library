import React from 'react';
import { ViewProps as RNViewProps } from 'react-native';
import {
  BackgroundColorProps,
  BackgroundColorShorthandProps,
  LayoutProps,
  PositionProps,
  SpacingProps,
  SpacingShorthandProps,
  VariantProps,
} from '@shopify/restyle';
import { Theme } from '../../theme';
export type RestyleProps = VariantProps<Theme, 'cardVariants'> &
  SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  LayoutProps<Theme> &
  PositionProps<Theme> &
  BackgroundColorProps<Theme> &
  BackgroundColorShorthandProps<Theme> &
  Omit<RNViewProps, 'children' | 'style'>;
export type CardProps = RestyleProps &
  Pick<RNViewProps, 'children' | 'style'> & {
    heading?: React.ReactNode;
    headingExtra?: React.ReactNode;
    footer?: React.ReactNode;
    kind?: 'default' | 'error';
  };
export declare const Card: ({
  heading,
  headingExtra,
  footer,
  children,
  style: providedStyles,
  kind,
  ...rest
}: CardProps) => React.JSX.Element;
