import {
  TouchableOpacity as RNTouchableOpacity,
  TouchableOpacityProps as RNTouchableOpacityProps,
} from 'react-native';
import { createBox } from '@shopify/restyle';

import { Theme } from '../../theme';

export const TouchableOpacity = createBox<Theme, RNTouchableOpacityProps>(
  RNTouchableOpacity,
);
