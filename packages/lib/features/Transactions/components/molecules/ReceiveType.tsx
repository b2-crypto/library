import React, { useMemo } from 'react';
import { useController } from 'react-hook-form';

import { RECEIVE_TYPE, ReceiveFormValues } from '../../types';
import { Tabs } from '../../../../components/molecules';
import { translate } from '../../../../helpers/i18n';
import { testID } from '../../../../helpers/testId';

export const ReceiveTypeTabs = () => {
  const { field } = useController<ReceiveFormValues>({ name: 'type' });
  const options = useMemo(
    () =>
      RECEIVE_TYPE.map(t => ({
        value: t,
        label: translate(`transaction.receiveTab.${t}`),
      })),
    [],
  );

  return (
    <Tabs
      data={options}
      value={field.value}
      onChange={field.onChange}
      wrapperProps={{
        accessibilityLabel: 'Receive type',
        ...testID('receiveTabs'),
      }}
    />
  );
};
