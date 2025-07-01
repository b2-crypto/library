import React, { ReactNode } from 'react';
import { ViewStyle } from 'react-native';
import { ModalProps } from 'react-native-modal';
import { ButtonProps, CardProps } from '../molecules';
type Props = {
  isVisible?: boolean;
  modalProps?: ModalProps;
  modalStyles?: ViewStyle;
  bottomButtonProps?: ButtonProps;
  children: ReactNode;
  onClose?: () => void;
} & CardProps;
export declare const CardModal: ({
  isVisible,
  modalProps,
  modalStyles,
  children,
  onClose,
  ...cardProps
}: Props) => React.JSX.Element;
export {};
