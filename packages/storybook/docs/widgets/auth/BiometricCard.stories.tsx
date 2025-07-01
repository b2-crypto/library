import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { BiometricCard } from '@apex-rn/library/features/Profile';

const meta: Meta<typeof BiometricCard> = {
  title: 'auth/Biometric/BiometricCard',
  component: BiometricCard,
};

export default meta;

type Story = StoryObj<typeof BiometricCard>;

export const BiometricCardStory: Story = {
  name: 'BiometricCard',
  render(args) {
    return <BiometricCard {...args} />;
  },
};
