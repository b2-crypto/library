import React from 'react';
import { SafeAreaView as NSafeAreaView, } from 'react-native-safe-area-context';
import { createBox, composeRestyleFunctions, backgroundColor, backgroundColorShorthand, layout, spacing, spacingShorthand, useRestyle, } from '@shopify/restyle';
const SafeAreaView = createBox(NSafeAreaView);
const restyleFunctions = composeRestyleFunctions([
    layout,
    spacing,
    spacingShorthand,
    backgroundColor,
    backgroundColorShorthand,
]);
// TODO: Implement global screen template.
export const Screen = ({ children, mode, edges, ...rest }) => {
    // @ts-ignore
    const { style, ...props } = useRestyle(restyleFunctions, rest);
    return (<SafeAreaView mode={mode} edges={edges} flex={1} flexDirection="column" bg="background1" style={style} {...props}>
      {children}
    </SafeAreaView>);
};
