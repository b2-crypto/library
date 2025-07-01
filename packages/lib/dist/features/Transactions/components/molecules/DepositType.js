import React, { useMemo } from 'react';
import { useController } from 'react-hook-form';
import { DEPOSIT_TYPE } from '../../types';
import { translate } from '../../../../helpers/i18n';
import { Tabs } from '../../../../components/molecules';
import { testID } from '../../../../helpers/testId';
export const DepositTypeTabs = ({ type }) => {
    const { field } = useController({ name: 'type' });
    const options = useMemo(() => DEPOSIT_TYPE.map(t => ({
        value: t,
        label: translate(`transaction.${type}Tab.${t}`),
    })), [type]);
    return (<Tabs data={options} value={field.value} onChange={field.onChange} wrapperProps={{
            accessibilityLabel: 'Deposit type tabs',
            ...testID('depositTabs'),
        }}/>);
};
