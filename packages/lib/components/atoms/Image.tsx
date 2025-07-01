import { createBox } from '@shopify/restyle';
import { Image as RNImage, ImageProps } from 'react-native';

import { Theme } from '../../theme';

export const Image = createBox<Theme, ImageProps>(RNImage);
