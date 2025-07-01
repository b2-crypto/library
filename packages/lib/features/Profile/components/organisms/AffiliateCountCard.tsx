import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Box, Text } from '../../../../components/atoms';
import { Card } from '../../../../components/molecules';
import { translate } from '../../../../helpers/i18n';

type AffiliateCountCardProps = {
  /** Data loading indicator */
  isLoading: boolean;
  /** Number of user's affiliates */
  affiliateCount?: number;
};

export const AffiliateCountCard = ({
  isLoading,
  affiliateCount = 0,
}: AffiliateCountCardProps) => (
  <Card heading={translate('profile.affiliate.activeAffiliates.title')}>
    <Box padding="m">
      {isLoading ? (
        <Box flex={1} justifyContent="center" alignItems="center">
          <ActivityIndicator />
        </Box>
      ) : (
        <Text>
          {translate('profile.affiliate.activeAffiliates.content')}:{' '}
          {affiliateCount}
        </Text>
      )}
    </Box>
  </Card>
);
