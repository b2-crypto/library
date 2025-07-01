import * as React from 'react';

import { Text } from '../../../../components';
import { translate } from '../../../../helpers';

export const MarginStatus = ({ isEnabled }: { isEnabled: boolean }) => {
  return (
    <Text>
      {translate('profile.margin.statusLabel')}{' '}
      <Text variant="textBold">
        {isEnabled
          ? translate('profile.margin.statusEnabled')
          : translate('profile.margin.statusDisabled')}
      </Text>
    </Text>
  );
};
