import React from 'react';
import { StyleSheet } from 'react-native';
import { BlurView as Blur, BlurViewProps } from '@react-native-community/blur';

export const BlurView = ({ style, ...props }: BlurViewProps) => {
  return (
    <Blur
      blurType="light"
      blurAmount={50}
      // @ts-ignore: Seems like prop is missing in the type definition
      overlayColor="transparent"
      reducedTransparencyFallbackColor="white"
      {...props}
      style={[StyleSheet.absoluteFill, style]}
    />
  );
};
