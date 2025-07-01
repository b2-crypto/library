import React from 'react';
import {
  View as RNView,
  ViewProps as RNViewProps,
  ViewStyle,
} from 'react-native';
import {
  backgroundColor,
  BackgroundColorProps,
  backgroundColorShorthand,
  BackgroundColorShorthandProps,
  composeRestyleFunctions,
  createVariant,
  layout,
  LayoutProps,
  position,
  PositionProps,
  spacing,
  SpacingProps,
  spacingShorthand,
  SpacingShorthandProps,
  useRestyle,
  useTheme,
  VariantProps,
} from '@shopify/restyle';

import { Theme } from '../../theme';
import { Box } from '../atoms';

import { SectionHeading } from './SectionHeading';

export type RestyleProps = VariantProps<Theme, 'cardVariants'> &
  SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  LayoutProps<Theme> &
  PositionProps<Theme> &
  BackgroundColorProps<Theme> &
  BackgroundColorShorthandProps<Theme> &
  Omit<RNViewProps, 'children' | 'style'>;

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  createVariant<Theme, 'cardVariants'>({ themeKey: 'cardVariants' }),
  spacing,
  spacingShorthand,
  layout,
  // @ts-ignore
  position,
  backgroundColor,
  backgroundColorShorthand,
]);

export type CardProps = RestyleProps &
  Pick<RNViewProps, 'children' | 'style'> & {
    heading?: React.ReactNode;
    headingExtra?: React.ReactNode;
    footer?: React.ReactNode;
    kind?: 'default' | 'error';
  };

export const Card = ({
  heading,
  headingExtra,
  footer,
  children,
  style: providedStyles,
  kind = 'default',
  ...rest
}: CardProps) => {
  const theme = useTheme<Theme>();
  // @ts-expect-error
  const { style, ...props } = useRestyle(restyleFunctions, {
    variant: 'elevated' as const,
    backgroundColor: 'background2' as const,
    ...rest,
  });

  const headingRadius = theme.cardVariants.defaults.borderRadius;

  return (
    <RNView {...props} style={[style as ViewStyle, providedStyles]}>
      {!!heading && (
        <SectionHeading
          backgroundColor={kind === 'error' ? 'error' : undefined}
          borderTopLeftRadius={headingRadius}
          borderTopRightRadius={headingRadius}
          extra={headingExtra}>
          {heading}
        </SectionHeading>
      )}
      {children}
      {!!footer && (
        <Box borderTopColor="border3" borderTopWidth={1} padding="m">
          {footer}
        </Box>
      )}
    </RNView>
  );
};
