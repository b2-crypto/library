import React, { useMemo, useRef } from 'react';
import { useWindowDimensions, Animated, StyleSheet, } from 'react-native';
import { useTheme } from '../../../theme';
import { Box } from '../../../components/atoms';
const ITEM_HEIGHT = 190;
const DOT_SIZE = 10;
export const MarketingCarousel = ({ children, itemHeight = ITEM_HEIGHT, dotActiveColor, dotInactiveColor, ...props }) => {
    const { width } = useWindowDimensions();
    const { colors } = useTheme();
    const scrollX = useRef(new Animated.Value(0)).current;
    const inputRange = useMemo(() => React.Children.toArray(children)
        .filter(Boolean)
        .map((_, i) => i * width), [children, width]);
    return (<Box {...props}>
      <Animated.FlatList data={React.Children.toArray(children).filter(Boolean)} horizontal pagingEnabled decelerationRate="fast" showsHorizontalScrollIndicator={false} bounces={false} style={[{ height: itemHeight }, styles.container]} renderItem={({ item }) => (<Box px="m" width={width}>
            {item}
          </Box>)} onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: true })}/>
      <Box mt="sm" justifyContent="center" flexDirection="row" gap="xs">
        {React.Children.toArray(children)
            .filter(Boolean)
            .map((card, i) => {
            return (<Animated.View key={card.props.title} style={[
                    styles.dot,
                    {
                        backgroundColor: scrollX.interpolate({
                            inputRange,
                            outputRange: inputRange.map((_, idx) => idx === i
                                ? dotActiveColor || colors.brandSolid
                                : dotInactiveColor || colors.border2),
                        }),
                    },
                ]}/>);
        })}
      </Box>
    </Box>);
};
const styles = StyleSheet.create({
    dot: { width: DOT_SIZE, height: DOT_SIZE, borderRadius: DOT_SIZE / 2 },
    container: { overflow: 'hidden' },
});
