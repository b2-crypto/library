import React from 'react';
import { TwoFactorCardProps } from '../../types';
export declare const TwoFactorCardWidget: ({
  is2faEnabled,
  modalVisible,
  manageState,
  onManagePress,
  onEnablePress,
  onManageConfirmPress,
  setManageState,
}: {
  is2faEnabled: boolean;
  modalVisible: boolean;
  manageState: boolean;
  onManagePress: () => void;
  onEnablePress: () => void;
  onManageConfirmPress: () => void;
  setManageState: (newState: boolean) => void;
}) => React.JSX.Element;
export declare const TwoFactorCard: ({
  onEnable2FA,
  onDisable2FA,
}: TwoFactorCardProps) => React.JSX.Element;
