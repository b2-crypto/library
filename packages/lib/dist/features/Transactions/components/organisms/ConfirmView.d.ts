import React from 'react';
import { Theme } from '../../../../theme';
type ConfirmModalProps = {
  symbol: string;
  icon: React.ReactNode;
  title: string;
  titleColor?: keyof Theme['colors'];
  subTitle: string;
  button?: React.ReactNode;
  data: Array<{
    label: string;
    value: string;
    vertical?: boolean;
  }>;
  onClose: () => void;
  secondarySymbol?: string;
};
export declare const ConfirmView: ({
  symbol,
  icon,
  title,
  titleColor,
  subTitle,
  data,
  button,
  onClose,
  secondarySymbol,
}: ConfirmModalProps) => React.JSX.Element;
export {};
