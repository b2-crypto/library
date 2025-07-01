import React from 'react';
import { Box, Text } from '../../../../components/atoms';
import { SectionHeading } from '../../../../components/molecules';
import { translate } from '../../../../helpers/i18n';
import { EnableMarginWidget } from '../../../Profile/components/organisms';
import { MarginStatusWidget } from '../organisms';
export const MarginProfileTab = () => {
    return (<>
      <SectionHeading>{translate('profile.margin.heading')}</SectionHeading>
      <Box mx="m" p="m">
        <Text color="textSecondary" mb="m">
          {translate('profile.margin.introText')}
        </Text>
        <MarginStatusWidget />
      </Box>
      <EnableMarginWidget />
    </>);
};
