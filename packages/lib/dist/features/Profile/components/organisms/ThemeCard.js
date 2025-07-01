import React from 'react';
import { Card } from '../../../../components/molecules';
import { translate } from '../../../../helpers/i18n';
import { Box, Radio } from '../../../../components/atoms';
import { testID } from '../../../../helpers/testId';
export const OPTIONS = ['system', 'dark', 'light'];
export const ThemeCard = ({ value, onChange }) => {
    return (<Card heading={translate('profile.colorSchemeHeading')}>
      <Box flexDirection="row" padding="m">
        {OPTIONS.map((theme, idx) => (<Box key={theme} mr={idx + 1 !== OPTIONS.length ? 'm' : undefined}>
            <Radio checked={value === theme} label={translate(`profile.colorScheme.${theme}`)} onChange={() => onChange(theme)} accessibilityLabel={theme} {...testID(theme)}/>
          </Box>))}
      </Box>
    </Card>);
};
