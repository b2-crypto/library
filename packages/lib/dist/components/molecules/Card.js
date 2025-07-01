import React from 'react';
import { View as RNView, } from 'react-native';
import { backgroundColor, backgroundColorShorthand, composeRestyleFunctions, createVariant, layout, position, spacing, spacingShorthand, useRestyle, useTheme, } from '@shopify/restyle';
import { Box } from '../atoms';
import { SectionHeading } from './SectionHeading';
const restyleFunctions = composeRestyleFunctions([
    createVariant({ themeKey: 'cardVariants' }),
    spacing,
    spacingShorthand,
    layout,
    // @ts-ignore
    position,
    backgroundColor,
    backgroundColorShorthand,
]);
export const Card = ({ heading, headingExtra, footer, children, style: providedStyles, kind = 'default', ...rest }) => {
    const theme = useTheme();
    // @ts-expect-error
    const { style, ...props } = useRestyle(restyleFunctions, {
        variant: 'elevated',
        backgroundColor: 'background2',
        ...rest,
    });
    const headingRadius = theme.cardVariants.defaults.borderRadius;
    return (<RNView {...props} style={[style, providedStyles]}>
      {!!heading && (<SectionHeading backgroundColor={kind === 'error' ? 'error' : undefined} borderTopLeftRadius={headingRadius} borderTopRightRadius={headingRadius} extra={headingExtra}>
          {heading}
        </SectionHeading>)}
      {children}
      {!!footer && (<Box borderTopColor="border3" borderTopWidth={1} padding="m">
          {footer}
        </Box>)}
    </RNView>);
};
