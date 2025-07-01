import React, { useState, useCallback, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { Slider } from '@react-native-assets/slider';
import { useTheme } from '../../theme';
import { Box } from './Box';
import { Text } from './Text';
const MARK_SIZE = 12;
const SliderBullet = React.memo(({ active }) => {
    return (<Box width={MARK_SIZE} height={MARK_SIZE} backgroundColor={active ? 'textSecondary' : 'formBorder'} borderColor="textSecondary" borderWidth={1} borderRadius={MARK_SIZE / 2}/>);
});
SliderBullet.displayName = 'SliderBullet';
const SliderThumb = React.memo(() => <SliderBullet active/>);
SliderThumb.displayName = 'SliderThumb';
export const SliderInput = ({ value, onChange, minValue = 0, maxValue = 10, step = 1, markers, formatValue, displayValue = true, }) => {
    const { colors } = useTheme();
    const fractionValue = (value - minValue) / (maxValue - minValue);
    const formattedValue = useMemo(() => {
        if (formatValue) {
            return formatValue(value);
        }
        return `${value.toLocaleString(undefined, {
            maximumFractionDigits: 2,
        })}%`;
    }, [value, formatValue]);
    const [containerRect, setContainerRect] = useState();
    const renderMark = useCallback(({ currentValue, markValue }) => {
        if (!markers?.includes(markValue)) {
            return null;
        }
        return <SliderBullet active={markValue <= currentValue}/>;
    }, [markers]);
    return (<Box flexDirection="column" position="relative" height={displayValue ? 44 : 24} style={styles.container} onLayout={e => {
            setContainerRect(e.nativeEvent.layout);
        }}>
      {displayValue && containerRect !== undefined && (<Box position="absolute" left={Math.max(Math.min(containerRect.x +
                fractionValue * containerRect.width -
                MARK_SIZE / 2, containerRect.width + MARK_SIZE / 2), -MARK_SIZE / 2)} flexDirection="row" flexGrow={0} top={4}>
          <Box style={styles.value}>
            <Text variant="captionBold" color="textSecondary" textAlign="center">
              {formattedValue}
            </Text>
          </Box>
        </Box>)}
      <Slider minimumValue={minValue} maximumValue={maxValue} step={step} thumbSize={MARK_SIZE} trackHeight={1} slideOnTap minimumTrackTintColor={colors.textSecondary} maximumTrackTintColor={colors.formBorder} value={value} onValueChange={onChange} 
    // onSlidingComplete={() => {}}
    StepMarker={renderMark} CustomThumb={SliderThumb} style={styles.slider}/>
    </Box>);
};
const styles = StyleSheet.create({
    container: { marginHorizontal: MARK_SIZE / 2 },
    slider: {
        marginTop: 'auto',
    },
    value: {
        position: 'absolute',
        left: '50%',
        transform: 'translate(-50%, 0)',
        zIndex: 10,
    },
});
