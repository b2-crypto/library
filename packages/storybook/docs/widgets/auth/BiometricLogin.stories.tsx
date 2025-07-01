import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BiometricLogin } from '@apex-rn/library/features/Auth';

const meta: Meta<typeof BiometricLogin> = {
  title: 'auth/Biometric/BiometricLogin',
  component: BiometricLogin,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof BiometricLogin>;

export const BiometricLoginStory: Story = {
  name: 'BiometricLogin',
  render(args) {
    return (
      <SafeAreaProvider style={{ height: '100vh' }}>
        <BiometricLogin {...args} />
      </SafeAreaProvider>
    );
  },
};
