import React, { useMemo } from 'react';
import { useController } from 'react-hook-form';
import { SEND_TYPE } from '../../types';
import { translate } from '../../../../helpers/i18n';
import { Tabs } from '../../../../components/molecules';
import { testID } from '../../../../helpers/testId';
export const SendTypeTabs = () => {
    const { field } = useController({ name: 'type' });
    const options = useMemo(() => SEND_TYPE.map(t => ({
        value: t,
        label: translate(`transaction.sendTab.${t}`),
    })), []);
    return (<Tabs data={options} value={field.value} onChange={field.onChange} wrapperProps={{
            accessibilityLabel: 'Send type tabs',
            ...testID('sendTabs'),
        }}/>);
};
