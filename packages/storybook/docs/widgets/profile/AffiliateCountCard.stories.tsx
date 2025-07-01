import { AffiliateCountCard } from '@apex-rn/library/features/Profile';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

export default {
  title: 'Profile/Affiliate',
  component: AffiliateCountCard,
} as Meta<typeof AffiliateCountCard>;

export const AffiliateCountCardStory: StoryObj<typeof AffiliateCountCard> = {
  render(args) {
    return <AffiliateCountCard {...args} />;
  },
  name: 'AffiliateCountCard',
  args: {
    affiliateCount: 1,
  },
};
