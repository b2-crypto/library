import { VariantProps } from '@shopify/restyle';
import React from 'react';
import { Theme } from '../../theme';
type ChangeProps = {
  change?: number;
  variant?: VariantProps<Theme, 'textVariants'>['variant'];
};
export declare const PositiveNegativeChange: ({
  change,
  variant,
}: ChangeProps) => React.JSX.Element | null;
export {};
