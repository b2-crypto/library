import React from 'react';
import { useVerificationStatus } from '../../../hooks';
import { Card } from '../../../components/molecules';
import { KYCButton } from '../../Profile/components/molecules';
import { Box, Text } from '../../../components/atoms';
import { translate } from '../../../helpers/i18n';
export const VerifyIdentityWidget = () => {
    const { verificationLevel } = useVerificationStatus();
    //To be only shown on level 0
    if (verificationLevel === 0) {
        return (<Card heading={translate('profile.verification.widgetTitle')} marginHorizontal="m" marginTop="m" footer={<KYCButton level={verificationLevel + 1}/>}>
        <Box padding="m">
          <Text>{translate('profile.verification.widgetText')}</Text>
        </Box>
      </Card>);
    }
    return null;
};
