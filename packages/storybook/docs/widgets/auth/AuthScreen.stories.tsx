import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthScreen } from '@apex-rn/library/features/Auth';
import { Box } from '@apex-rn/library/components';

export default {
  title: 'auth/Screens/AuthScreen',
  component: AuthScreen,
  parameters: { layout: 'fullscreen' },
} as Meta<typeof AuthScreen>;

export const AuthScreenStory: StoryFn<typeof AuthScreen> = args => (
  <SafeAreaProvider style={styles.provider}>
    <AuthScreen {...args}>
      <Box height={400} minWidth={300} />
    </AuthScreen>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({ provider: { height: '100vh' } });

AuthScreenStory.storyName = 'Auth Screen';
AuthScreenStory.args = {
  headerText: 'Welcome!',
};
