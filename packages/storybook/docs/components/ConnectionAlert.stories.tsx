import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { ConnectionAlert } from '@apex-rn/library/components';

export default {
  title: 'components/ConnectionAlert',
  component: ConnectionAlert,
} as Meta<typeof ConnectionAlert>;

export const ConnectionAlertComponent: StoryFn<
  typeof ConnectionAlert
> = args => <ConnectionAlert {...args} />;

ConnectionAlertComponent.storyName = 'Connection Alert';

ConnectionAlertComponent.args = {
  inversed: false,
};
