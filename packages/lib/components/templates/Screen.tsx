import React from 'react';
import { ViewStyle } from 'react-native';
import {
  SafeAreaView as NSafeAreaView,
  NativeSafeAreaViewProps,
} from 'react-native-safe-area-context';
import {
  createBox,
  BackgroundColorProps,
  BackgroundColorShorthandProps,
  SpacingProps,
  SpacingShorthandProps,
  LayoutProps,
  composeRestyleFunctions,
  backgroundColor,
  backgroundColorShorthand,
  layout,
  spacing,
  spacingShorthand,
  useRestyle,
} from '@shopify/restyle';

import { Theme } from '../../theme';

const SafeAreaView = createBox<Theme, NativeSafeAreaViewProps>(NSafeAreaView);

type RestyleProps = BackgroundColorProps<Theme> &
  BackgroundColorShorthandProps<Theme> &
  LayoutProps<Theme> &
  SpacingProps<Theme> &
  SpacingShorthandProps<Theme>;

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  layout,
  spacing,
  spacingShorthand,
  backgroundColor,
  backgroundColorShorthand,
]);

type ScreenProps = Pick<NativeSafeAreaViewProps, 'children' | 'mode' | 'edges'>;

// TODO: Implement global screen template.
export const Screen = ({
  children,
  mode,
  edges,
  ...rest
}: ScreenProps & RestyleProps) => {
  // @ts-ignore
  const { style, ...props } = useRestyle(restyleFunctions, rest);
  return (
    <SafeAreaView
      mode={mode}
      edges={edges}
      flex={1}
      flexDirection="column"
      bg="background1"
      style={style as ViewStyle}
      {...props}>
      {children}
    </SafeAreaView>
  );
};
