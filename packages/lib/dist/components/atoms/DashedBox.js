import React, { useMemo } from 'react';
import { Platform, View, StyleSheet } from 'react-native';
import { composeRestyleFunctions, spacing, spacingShorthand, backgroundColor, backgroundColorShorthand, border, layout, useRestyle, position, } from '@shopify/restyle';
import { Box } from './Box';
const restyleFunctions = composeRestyleFunctions([
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
export const DashedBox = ({ topDash = false, bottomDash = false, borderColor, children, ...props }) => {
    const borderProps = useMemo(() => {
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
        const fakeBorderProps = {
            height: 1,
            width: '100%',
            borderWidth: 1,
            borderColor: borderColor || 'border2',
            borderStyle: 'dashed',
        };
        return (<Box overflow="hidden">
        {topDash && <Box {...fakeBorderProps} style={styles.topDash}/>}
        <Box {...props}>{children}</Box>
        {bottomDash && <Box {...fakeBorderProps} style={styles.bottomDash}/>}
      </Box>);
    }
    return (<View {...viewProps} style={style}>
      {children}
    </View>);
};
const styles = StyleSheet.create({
    topDash: { marginTop: -1 },
    bottomDash: { marginBottom: -1 },
});
