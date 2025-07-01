import React from 'react';
import { DashedBox, Text } from '../../../components/atoms';
import { translate } from '../../../helpers/i18n';
export const RequestDetails = ({ request }) => {
    return (<DashedBox paddingHorizontal="xl" paddingVertical="s" bottomDash>
      <Text variant="captionReg" color="textSecondary">
        {translate('requests.requestFrom')}
      </Text>
      <Text marginVertical="s">{request?.requestorUsername}</Text>
      <Text variant="captionReg" color="textSecondary">
        {translate('requests.note')}
      </Text>
      <Text marginVertical="s">{request?.note}</Text>
    </DashedBox>);
};
