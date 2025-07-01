import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { KYCCard } from '@apex-rn/library/features/Profile';

export default {
  title: 'Profile',
  component: KYCCard,
} as Meta<typeof KYCCard>;

export const KYCCardStory: StoryObj<typeof KYCCard> = {
  render(args) {
    return <KYCCard {...args} />;
  },
  args: {
    verificationLevel: 1,
  },
  name: 'KYCCard',
};
