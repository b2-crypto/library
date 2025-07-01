import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { SearchHeader } from '@apex-rn/library/components';

export default {
  title: 'components/SearchHeader',
  component: SearchHeader,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof SearchHeader>;

export const SearchHeaderStory: StoryFn<typeof SearchHeader> = arg => (
  <SearchHeader {...arg} />
);
SearchHeaderStory.storyName = 'SearchHeader';
