import React from 'react';
import { ImageSourcePropType } from 'react-native';
export type MarketingCardProps = {
  title: string;
  body: React.ReactNode;
  onPress?: () => void;
  bg: ImageSourcePropType;
};
export declare const MarketingCard: ({
  title,
  body,
  onPress,
  bg,
}: MarketingCardProps) => React.JSX.Element;
