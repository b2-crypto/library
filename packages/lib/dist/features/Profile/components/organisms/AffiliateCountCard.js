import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Box, Text } from '../../../../components/atoms';
import { Card } from '../../../../components/molecules';
import { translate } from '../../../../helpers/i18n';
export const AffiliateCountCard = ({ isLoading, affiliateCount = 0, }) => (<Card heading={translate('profile.affiliate.activeAffiliates.title')}>
    <Box padding="m">
      {isLoading ? (<Box flex={1} justifyContent="center" alignItems="center">
          <ActivityIndicator />
        </Box>) : (<Text>
          {translate('profile.affiliate.activeAffiliates.content')}:{' '}
          {affiliateCount}
        </Text>)}
    </Box>
  </Card>);
