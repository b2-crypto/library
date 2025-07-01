import { Box, Text } from '../../../components';
import { translate } from '../../../helpers/i18n';

export const RepayContent = () => (
  <Box padding="m">
    <Text variant="bodyBold" textAlign="center">
      {translate('activity.repayMarginPositionModal.message')}
    </Text>
  </Box>
);
