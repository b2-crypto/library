import React, { useMemo } from 'react';
import { Platform, View, ViewStyle, StyleSheet, ViewProps } from 'react-native';
import {
  SpacingProps,
  SpacingShorthandProps,
  BackgroundColorProps,
  BackgroundColorShorthandProps,
  BorderProps,
  LayoutProps,
  composeRestyleFunctions,
  spacing,
  spacingShorthand,
  backgroundColor,
  backgroundColorShorthand,
  border,
  layout,
  useRestyle,
  position,
  PositionProps,
} from '@shopify/restyle';

import { Theme } from '../../theme';

import { Box } from './Box';

type BoxProps = React.ComponentProps<typeof Box>;

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

const restyleFunctions = composeRestyleFunctions<
  Theme,
  RestyleProps & BorderProps<Theme>
>([
  spacing,
  spacingShorthand,
  backgroundColor,
  backgroundColorShorthand,
  layout,
  // @ts-ignore
  position,
  // @ts-ignore
  border,
]);

type Props = {
  topDash?: boolean;
  bottomDash?: boolean;
  borderColor?: keyof Theme['colors'];
  children: React.ReactNode | React.ReactNode[];
} & RestyleProps;

export const DashedBox = ({
  topDash = false,
  bottomDash = false,
  borderColor,
  children,
  ...props
}: Props) => {
  const borderProps: BorderProps<Theme> = useMemo(() => {
    return Platform.OS === 'ios'
      ? {}
      : {
          borderBottomWidth: bottomDash ? 1 : undefined,
          borderTopWidth: topDash ? 1 : 0,
          borderStyle: 'dashed',
          borderColor: borderColor || 'border2',
        };
  }, [topDash, bottomDash, borderColor]);
  // There is an issue with types for `style` provided by useRestyle, that
  // don't much native styles
  // @ts-ignore
  const { style, ...viewProps } = useRestyle(restyleFunctions, {
    ...props,
    ...borderProps,
  });

  if (Platform.OS === 'ios') {
    // iOS doesn't support the dashed border from a single side,
    // so we emulate it with an empty block having full border.
    // @see https://stackoverflow.com/questions/73506925/when-trying-to-add-a-dashed-border-style-getting-unsupported-dashed-dotted-b
    const fakeBorderProps: Partial<BoxProps> = {
      height: 1,
      width: '100%',
      borderWidth: 1,
      borderColor: borderColor || 'border2',
      borderStyle: 'dashed',
    };

    return (
      <Box overflow="hidden">
        {topDash && <Box {...fakeBorderProps} style={styles.topDash} />}
        <Box {...props}>{children}</Box>
        {bottomDash && <Box {...fakeBorderProps} style={styles.bottomDash} />}
      </Box>
    );
  }

  return (
    <View {...viewProps} style={style as ViewStyle}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  topDash: { marginTop: -1 },
  bottomDash: { marginBottom: -1 },
});
