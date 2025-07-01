import React, { ReactNode } from 'react';
export declare const ScreenHeader: ({
  title,
  rightItem,
  onBackPress,
}: {
  title: string;
  rightItem?: ReactNode;
  onBackPress: () => void;
}) => React.JSX.Element;
