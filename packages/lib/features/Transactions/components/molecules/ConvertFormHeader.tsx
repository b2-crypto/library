import React from 'react';
import { useTheme } from '@shopify/restyle';
import { useFormContext } from 'react-hook-form';

import { Theme } from '../../../../theme';
import { translate } from '../../../../helpers/i18n';

import { Box, Text } from '../../../../components/atoms';
import { Button } from '../../../../components/molecules';
import { CloseIcon, Convert } from '../../../../assets/icons';
import { testID } from '../../../../helpers/testId';
import { ConvertFormValues } from '../../types';

type Props = {
  /** Optional title to use in the header. If not provided, the default one will be used */
  title?: string;
  /** Callback for the close button */
  onClose: () => void;
};

export const ConvertFormHeader = ({ title, onClose }: Props) => {
  const { colors } = useTheme<Theme>();
  const { setValue, getValues } = useFormContext<ConvertFormValues>();

  return (
    <Box
      paddingHorizontal="m"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      mb="s">
      <Button
        width={44}
        variant="secondary"
        icon={<Convert color={colors.textSecondary} />}
        onPress={() => {
          const { from, to } = getValues();
          setValue('from', to);
          setValue('to', from);
        }}
      />
      <Box flex={1} marginHorizontal="sm">
        <Text variant="textBold" {...testID('convertTitle')}>
          {title || translate('transactions.convertAssets')}
        </Text>
      </Box>
      <Button
        icon={<CloseIcon />}
        variant="line"
        onPress={onClose}
        accessibilityLabel="Close"
        {...testID('close')}
      />
    </Box>
  );
};
