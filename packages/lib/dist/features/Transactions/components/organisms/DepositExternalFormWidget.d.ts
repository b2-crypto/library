import React from 'react';
import { DepositExternalFormBody } from './DepositExternalFormBody';
type Props = Pick<
  React.ComponentProps<typeof DepositExternalFormBody>,
  'asset'
>;
export declare const DepositExternalFormWidget: (
  props: Props,
) => React.JSX.Element;
export {};
