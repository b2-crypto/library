import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { Button } from '@apex-rn/library/components';
import { VerificationTab } from '@apex-rn/library/features/Profile';

export default {
  title: 'Profile',
  component: VerificationTab,
} as Meta<typeof VerificationTab>;

export const VerificationTabStory: StoryFn<typeof VerificationTab> = args => (
  <VerificationTab {...args} />
);

VerificationTabStory.storyName = 'Verification Tab';

VerificationTabStory.args = {
  verificationLevel: 1,
  visibleLevels: [
    {
      benefitsInfo: '',
      benefitsVisible: false,
      button: <Button label="Affirm Your Identity" onPress={console.log} />,
      level: 1,
      requirementsInfo: '• Verify personal information. \n• No uploads.',
      requirementsVisible: true,
      verificationMethod: 'sumsub',
    },
  ],
};
