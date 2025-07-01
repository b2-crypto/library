import { View as RNView, ViewProps as RNViewProps } from 'react-native';
import {
  border,
  BorderProps,
  createRestyleComponent,
  createVariant,
  layout,
  LayoutProps,
  spacing,
  SpacingProps,
  spacingShorthand,
  SpacingShorthandProps,
  VariantProps,
  BackgroundColorProps,
} from '@shopify/restyle';

import { Theme } from '../../theme';

export type ViewProps = VariantProps<Theme, 'viewVariants'> &
  SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  BackgroundColorProps<Theme> &
  BorderProps<Theme> &
  LayoutProps<Theme> &
  RNViewProps;

const restyleFunctions = [
  createVariant<Theme>({
    themeKey: 'viewVariants',
  }) as any,
  spacing,
  spacingShorthand,
  border,
  layout,
];

export const View = createRestyleComponent<ViewProps, Theme>(
  restyleFunctions,
  RNView,
);
