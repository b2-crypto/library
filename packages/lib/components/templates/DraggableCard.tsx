import React from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import { Platform } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import { Box } from '../atoms';
import { Screen } from './Screen';

export const DraggableCard = ({
  children,
  onClose,
}: {
    children: React.ReactNode | React.ReactNode[];
    onClose: () => void;
}) => {
  const { height } = useWindowDimensions();
  return (
    <GestureRecognizer
      onSwipeDown={onClose}
      style={styles.container}>
      <Screen backgroundColor="background1">
        <Box
          shadowOffset={{ width: 0, height: 4 }}
          shadowRadius={25}
          shadowOpacity={0.4}
          height={height}
          borderTopRightRadius={25}
          borderTopLeftRadius={25}
          shadowColor="black"
          marginTop={Platform.OS === 'ios' ? 'm' : 'lg'}
          backgroundColor="background2">
          <Box
            alignSelf="center"
            width={54}
            height={4}
            borderRadius={2}
            margin="s"
            backgroundColor="button2ndBackground"
          />
          {children}
        </Box>
      </Screen>
    </GestureRecognizer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})