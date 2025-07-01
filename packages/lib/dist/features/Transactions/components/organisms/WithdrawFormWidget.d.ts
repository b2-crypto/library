import React from 'react';
import { SendWithdrawFormBody } from './SendWithdrawFormBody';
type Props = Pick<
  React.ComponentProps<typeof SendWithdrawFormBody>,
  'asset' | 'onQrClick' | 'balance'
>;
export declare const WithdrawFormWidget: (props: Props) => React.JSX.Element;
export {};
