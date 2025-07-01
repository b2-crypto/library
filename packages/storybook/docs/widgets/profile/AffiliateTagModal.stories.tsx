import { AffiliateTagModal } from '@apex-rn/library/features/Profile';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

export default {
  title: 'Profile/Affiliate',
  component: AffiliateTagModal,
} as Meta<typeof AffiliateTagModal>;

export const AffiliateTagModalStory: StoryObj<typeof AffiliateTagModal> = {
  render(args) {
    return <AffiliateTagModal {...args} />;
  },
  name: 'AffiliateTagModal',
  args: {
    modalVisible: true,
  },
};
