import React, { useMemo, useState } from 'react';
import { translate } from '../../../helpers/i18n';
import { Box } from '../../../components/atoms';
import { Tabs } from '../../../components/molecules';
import { testID } from '../../../helpers/testId';
export const ActivityTabs = ({ tabs, renderTab, }) => {
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const options = useMemo(() => tabs.map(name => ({
        value: name,
        label: translate(`activity.${name}`),
    })), [tabs]);
    return (<>
      <Box paddingHorizontal="m" borderBottomColor="border3" borderBottomWidth={1}>
        <Tabs type="pills_wide" data={options} value={activeTab} onChange={setActiveTab} wrapperProps={{
            accessibilityLabel: 'Activity Tabs',
            ...testID('activityTabs'),
        }}/>
      </Box>
      {renderTab(activeTab)}
    </>);
};
