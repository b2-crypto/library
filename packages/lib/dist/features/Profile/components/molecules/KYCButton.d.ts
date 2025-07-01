import React from 'react';
export declare const KYCButton: ({
  level,
  label,
  disabled,
  onPress,
  ...props
}: {
  level: number;
  label?: string | undefined;
  disabled?: boolean | undefined;
  onPress?: (() => void) | undefined;
}) => React.JSX.Element;
