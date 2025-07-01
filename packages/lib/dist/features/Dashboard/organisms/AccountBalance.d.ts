import * as React from 'react';
import { View } from '../../../components/atoms';
type Props = {
  totalBalance?: number;
  direction?: 'horizontal' | 'vertical';
} & Omit<React.ComponentProps<typeof View>, 'variant'>;
export declare const AccountBalance: ({
  totalBalance,
  direction: direction,
  ...props
}: Props) => React.JSX.Element;
export declare const AccountBalanceWidget: (
  props: Omit<Props, 'totalBalance'>,
) => React.JSX.Element;
export {};
