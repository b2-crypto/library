import React from 'react';
import { SendWithdrawFormBody } from '../organisms';
type Props = {
  productId?: number;
  onClose: () => void;
  onQrClick: React.ComponentProps<typeof SendWithdrawFormBody>['onQrClick'];
};
export declare const SendForm: ({
  productId,
  onClose,
  onQrClick,
}: Props) => React.JSX.Element;
export {};
