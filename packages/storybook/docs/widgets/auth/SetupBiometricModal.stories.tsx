import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Box } from '@apex-rn/library/components';
import { SetupBiometricModal } from '@apex-rn/library/features/Auth';

const meta: Meta<typeof SetupBiometricModal> = {
  title: 'auth/Biometric/SetupBiometricModal',
  component: SetupBiometricModal,
};
export default meta;

type Story = StoryObj<typeof SetupBiometricModal>;

export const SetupBiometricModalStory: Story = {
  name: 'SetupBiometricModal',
  render(args) {
    return (
      <Box flex={1}>
        <SetupBiometricModal {...args} />
      </Box>
    );
  },
};
