import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { NewsFeed } from '@apex-rn/library/features/Dashboard/organisms/NewsFeed/NewsFeed';

import { responseData } from './coinbase.mock';

const feedURL = 'https://www.coindesk.com/arc/outboundfeeds/rss/';

export default {
  title: 'generic/NewsFeed',
  component: NewsFeed,
  parameters: {
    mockData: [
      {
        url: feedURL,
        method: 'GET',
        status: 200,
        response: () => responseData,
      },
    ],
  },
} as Meta<typeof NewsFeed>;

export const NewsFeedWidget: StoryFn<typeof NewsFeed> = args => (
  <NewsFeed {...args} />
);

NewsFeedWidget.storyName = 'NewsFeed';

NewsFeedWidget.args = {
  feedURL: feedURL,
  sourceName: 'CoinDesk',
};
