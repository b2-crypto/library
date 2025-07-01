import {
  BoxProps,
  SpacingProps,
  boxRestyleFunctions,
  createRestyleComponent,
  BaseTheme,
  spacing,
} from '@shopify/restyle';
import LinearGradient from 'react-native-linear-gradient';
import { Theme } from '../../theme';

export type GradientProps = BoxProps<Theme> & SpacingProps<Theme> & BaseTheme;

const restyleFunctions = [...boxRestyleFunctions, spacing];

export const Gradient = createRestyleComponent(
  restyleFunctions,
  LinearGradient,
);
