import React from 'react';
import { BoxProps } from '@shopify/restyle';
import { Theme } from '../../../../theme';
type Props = {
  children: React.ReactNode;
  /** Additional props for icon wrapper (e.g. border color, elevation, etc) */
  iconBoxProps: Partial<Omit<BoxProps<Theme>, 'width' | 'height'>>;
  /** Icon component */
  icon: React.ReactNode;
  /** Handler for the close button */
  onClose: () => void;
};
export declare const TransactionFormHeader: ({
  children,
  onClose,
  icon,
  iconBoxProps,
}: Props) => React.JSX.Element;
export {};
