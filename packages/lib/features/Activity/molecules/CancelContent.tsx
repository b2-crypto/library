import React from 'react';
import { Box, Text } from '../../../components/atoms';
import { translate } from '../../../helpers/i18n';
import { PositionDetailsTable } from '../../../components/organisms/PositionDetailsTable';
import { MarginPositionItem } from '../types';

type Props = {
  item: MarginPositionItem;
};

export const CancelContent = ({ item }: Props) => (
  <Box flex={0} paddingLeft="m" paddingRight="m" mt="s">
    <Box flexDirection="column" alignItems="flex-start">
      <Text variant="captionBold" color="textSecondary" mb="s">
        {translate('activity.cancelMarginPositionModal.title')}
      </Text>
      <PositionDetailsTable position={item} />
    </Box>
    <Box mt="xxs" mb="m" padding="s" backgroundColor="background1">
      <Text variant="captionReg" color="textSecondary" textAlign="justify">
        {translate('activity.cancelMarginPositionModal.message')}
      </Text>
    </Box>
  </Box>
);
