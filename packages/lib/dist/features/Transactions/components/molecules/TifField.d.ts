import React from 'react';
import { FormDropdown } from '../../../../components/molecules';
type Props = Omit<
  React.ComponentProps<typeof FormDropdown>,
  'items' | 'name' | 'placeholder'
>;
export declare const TifField: (props: Props) => React.JSX.Element;
export {};
