import * as React from 'react';
import { translate } from '../../helpers/i18n';
import { Box, DashedBox, Text } from '../atoms';
export const BoxFormItem = ({ label, labelExtra, children, footer, error, }) => (<Box borderColor="formBorder" borderWidth={1} borderRadius={6}>
    <Box paddingHorizontal="m" paddingVertical="s" flexDirection="row" alignItems="center" justifyContent="space-between">
      <Text variant="textBold">{label}</Text>
      {labelExtra}
    </Box>

    <DashedBox topDash bottomDash={!!footer} flexDirection="column" padding="s">
      {children}
      {!!error && (<Box flex={1} mt="s">
          <Text variant="captionReg" color="error">
            {translate(error, { defaultValue: error })}
          </Text>
        </Box>)}
    </DashedBox>

    {!!footer && (<Box paddingHorizontal="m" paddingVertical="s" flexDirection="row" alignItems="center" justifyContent="space-between">
        {footer}
      </Box>)}
  </Box>);
