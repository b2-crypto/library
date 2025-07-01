import React from 'react';
import { RequestModel } from '../../../types/commonTypes';
type Props = {
  type?: string;
  onClose: () => void;
  onSubmit: () => void;
  submitting: boolean;
  request: RequestModel;
};
export declare const TransferRequestConfirm: ({
  type,
  request,
  onClose,
  onSubmit,
  submitting,
}: Props) => React.JSX.Element;
export {};
