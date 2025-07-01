import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { VerificationLevelSection } from '@apex-rn/library/features/Profile';
import { Button } from '@apex-rn/library/components';

export default {
  title: 'Profile',
  component: VerificationLevelSection,
} as Meta<typeof VerificationLevelSection>;

export const VerificationLevelSectionStory: StoryFn<
  typeof VerificationLevelSection
> = args => <VerificationLevelSection {...args} />;

VerificationLevelSectionStory.storyName = 'Verification Level Section';

VerificationLevelSectionStory.args = {
  currentLevel: 1,
  levelData: {
    benefitsInfo: '',
    benefitsVisible: false,
    button: <Button label="Affirm Your Identity" onPress={console.log} />,
    level: 1,
    requirementsInfo: '• Verify personal information. \n• No uploads.',
    requirementsVisible: true,
    verificationMethod: 'sumsub',
  },
};
