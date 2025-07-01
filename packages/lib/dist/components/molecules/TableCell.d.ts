import React from 'react';
import { Theme } from '../../theme';
import { Box } from '../atoms';
type BoxProps = React.ComponentProps<typeof Box>;
type TableCellProps = {
  title: string;
  value: string;
  titleColor?: keyof Theme['colors'];
  valueColor?: keyof Theme['colors'];
  valueStyleVariant?: string;
  isNarrow?: boolean;
  isInverted?: boolean;
} & BoxProps;
export declare const TableCell: ({
  title,
  value,
  titleColor,
  valueColor,
  isNarrow,
  isInverted,
  ...props
}: TableCellProps) => React.JSX.Element;
export {};
