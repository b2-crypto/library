import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ViewProps } from './View';

export const BlurView = ({ style }: ViewProps) => {
  return <View style={[styles.blur, style]} />;
};

const styles = StyleSheet.create({
  blur: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 999,
  },
});
