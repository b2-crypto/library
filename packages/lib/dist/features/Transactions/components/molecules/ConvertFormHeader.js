import React from 'react';
import { useTheme } from '@shopify/restyle';
import { useFormContext } from 'react-hook-form';
import { translate } from '../../../../helpers/i18n';
import { Box, Text } from '../../../../components/atoms';
import { Button } from '../../../../components/molecules';
import { CloseIcon, Convert } from '../../../../assets/icons';
import { testID } from '../../../../helpers/testId';
export const ConvertFormHeader = ({ title, onClose }) => {
    const { colors } = useTheme();
    const { setValue, getValues } = useFormContext();
    return (<Box paddingHorizontal="m" flexDirection="row" justifyContent="space-between" alignItems="center" mb="s">
      <Button width={44} variant="secondary" icon={<Convert color={colors.textSecondary}/>} onPress={() => {
            const { from, to } = getValues();
            setValue('from', to);
            setValue('to', from);
        }}/>
      <Box flex={1} marginHorizontal="sm">
        <Text variant="textBold" {...testID('convertTitle')}>
          {title || translate('transactions.convertAssets')}
        </Text>
      </Box>
      <Button icon={<CloseIcon />} variant="line" onPress={onClose} accessibilityLabel="Close" {...testID('close')}/>
    </Box>);
};
