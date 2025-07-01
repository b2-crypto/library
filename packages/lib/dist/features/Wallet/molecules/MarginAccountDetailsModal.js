import React from 'react';
import { StyleSheet } from 'react-native';
import { Box, Text } from '../../../components/atoms';
import { CardModal } from '../../../components/organisms';
import { Button } from '../../../components/molecules';
import { formatNumber } from '../../../helpers/format';
import { translate } from '../../../helpers/i18n';
export const MarginAccountDetailsModal = ({ modalVisible, isLoading, handleClose, marginAccountInfo, }) => {
    const { MarginBalance, MarginEquity, UsedMarginValue, UsableMarginValue, Liability, PnLValue, PnLPercentage, MaintenanceRequirement, Balance, } = marginAccountInfo ?? {};
    return (<CardModal isVisible={modalVisible} onClose={handleClose} heading={translate('marginTrading.accountDetails.title')} modalStyles={styles.modal} footer={<Button loading={isLoading} label={translate('marginTrading.accountDetails.ok')} onPress={handleClose}/>}>
      <Box padding="m" gap="m">
        <Box>
          <Text variant="headlineBold" color="textPrimary" marginTop="xs">
            {formatNumber(Balance ?? 0)}
          </Text>
          <Text color="textSecondary">
            {translate('marginTrading.accountDetails.totalBalance')}
          </Text>
          <Text variant="bodyReg" color="textSecondary" marginTop="xs">
            <Text variant="bodyBold">{formatNumber(MarginBalance ?? 0)}</Text>{' '}
            {translate('marginTrading.accountDetails.afterHaircuts')}
          </Text>
        </Box>

        <Box>
          <Text variant="headlineBold" color="textPrimary" marginTop="xs">
            {formatNumber(MarginEquity ?? 0)}
          </Text>
          <Text color="textSecondary">
            {translate('marginTrading.accountDetails.marginEquity')}
          </Text>
        </Box>

        <Box>
          <Text variant="headlineBold" color="textPrimary" marginTop="xs">
            {formatNumber(PnLValue ?? 0)}{' '}
            <Text>({PnLPercentage?.toFixed(2)}%)</Text>
          </Text>
          <Text color="textSecondary">
            {translate('marginTrading.accountDetails.todayPnL')}
          </Text>
        </Box>

        <Box>
          <Text variant="headlineBold" color="textPrimary" marginTop="xs">
            {formatNumber(MaintenanceRequirement ?? 0)}
          </Text>
          <Text color="textSecondary">
            {translate('marginTrading.accountDetails.maintenanceThreshold')}
          </Text>
        </Box>

        <Box>
          <Text variant="headlineBold" color="textPrimary" marginTop="xs">
            {formatNumber(Liability ?? 0)}
          </Text>
          <Text color="textSecondary">
            {translate('marginTrading.accountDetails.liability')}
          </Text>
        </Box>

        <Box>
          <Text variant="headlineBold" color="textPrimary" marginTop="xs">
            {formatNumber(UsedMarginValue ?? 0)}
          </Text>
          <Text color="textSecondary">
            {translate('marginTrading.accountDetails.usedMargin')}
          </Text>
        </Box>

        <Box>
          <Text variant="headlineBold" color="textPrimary" marginTop="xs">
            {formatNumber(UsableMarginValue ?? 0)}
          </Text>
          <Text color="textSecondary">
            {translate('marginTrading.accountDetails.usableMargin')}
          </Text>
        </Box>
      </Box>
    </CardModal>);
};
const styles = StyleSheet.create({
    modal: {
        justifyContent: 'center',
        marginTop: 0,
    },
});
