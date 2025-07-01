import { BoxProps } from '@shopify/restyle';
import React from 'react';
import { type ImageSourcePropType } from 'react-native';
import { Theme } from '../../../theme';
import { type MarketingCardProps } from '../../../components/molecules';
type Props = BoxProps<Theme> & {
  /** Array of MarketingCards to display in the carousel */
  children: React.ReactElement<MarketingCardProps>[];
  /** Height of the item. Required `backgrounds` are provided with different height. */
  itemHeight?: number;
  /** Optional array of card background images. */
  backgrounds?: ImageSourcePropType[];
  /** Color of the active card's dot. */
  dotActiveColor?: string;
  /** Color of the inactive card's dot. */
  dotInactiveColor?: string;
};
export declare const MarketingCarousel: ({
  children,
  itemHeight,
  dotActiveColor,
  dotInactiveColor,
  ...props
}: Props) => React.JSX.Element;
export {};
