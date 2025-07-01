import { View as RNView } from 'react-native';
import { border, createRestyleComponent, createVariant, layout, spacing, spacingShorthand, } from '@shopify/restyle';
const restyleFunctions = [
    createVariant({
        themeKey: 'viewVariants',
    }),
    spacing,
    spacingShorthand,
    border,
    layout,
];
export const View = createRestyleComponent(restyleFunctions, RNView);
