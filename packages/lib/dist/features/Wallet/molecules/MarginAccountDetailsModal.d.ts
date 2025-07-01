import React from 'react';
import { MarginAccountInfoResponse } from '../../../types/apiResponses';
type Props = {
  modalVisible: boolean;
  isLoading?: boolean;
  handleClose?: () => void;
  marginAccountInfo: MarginAccountInfoResponse | undefined;
};
export declare const MarginAccountDetailsModal: ({
  modalVisible,
  isLoading,
  handleClose,
  marginAccountInfo,
}: Props) => React.JSX.Element;
export {};
