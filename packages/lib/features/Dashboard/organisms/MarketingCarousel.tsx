import { BoxProps } from '@shopify/restyle';
import React, { useMemo, useRef } from 'react';
import {
  useWindowDimensions,
  Animated,
  StyleSheet,
  type ImageSourcePropType,
} from 'react-native';

import { Theme, useTheme } from '../../../theme';
import { Box } from '../../../components/atoms';
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

const ITEM_HEIGHT = 190;
const DOT_SIZE = 10;

export const MarketingCarousel = ({
  children,
  itemHeight = ITEM_HEIGHT,
  dotActiveColor,
  dotInactiveColor,
  ...props
}: Props) => {
  const { width } = useWindowDimensions();
  const { colors } = useTheme();
  const scrollX = useRef(new Animated.Value(0)).current;

  const inputRange = useMemo(
    () =>
      React.Children.toArray(children)
        .filter(Boolean)
        .map((_, i) => i * width),
    [children, width],
  );

  return (
    <Box {...props}>
      <Animated.FlatList
        data={React.Children.toArray(children).filter(Boolean)}
        horizontal
        pagingEnabled
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        bounces={false}
        style={[{ height: itemHeight }, styles.container]}
        renderItem={({ item }) => (
          <Box px="m" width={width}>
            {item}
          </Box>
        )}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true },
        )}
      />
      <Box mt="sm" justifyContent="center" flexDirection="row" gap="xs">
        {React.Children.toArray(children)
          .filter(Boolean)
          .map((card, i) => {
            return (
              <Animated.View
                key={
                  (card as React.ReactElement<MarketingCardProps>).props.title
                }
                style={[
                  styles.dot,
                  {
                    backgroundColor: scrollX.interpolate({
                      inputRange,
                      outputRange: inputRange.map((_, idx) =>
                        idx === i
                          ? dotActiveColor || colors.brandSolid
                          : dotInactiveColor || colors.border2,
                      ),
                    }),
                  },
                ]}
              />
            );
          })}
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  dot: { width: DOT_SIZE, height: DOT_SIZE, borderRadius: DOT_SIZE / 2 },
  container: { overflow: 'hidden' },
});
