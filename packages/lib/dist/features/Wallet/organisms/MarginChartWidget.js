import React, { useReducer } from 'react';
import { Box, Text, TouchableOpacity } from '../../../components/atoms';
import { translate } from '../../../helpers/i18n';
import { MarginAccountDetailsModal } from '../molecules/MarginAccountDetailsModal';
import { formatCurrency } from '../../../helpers/format';
import { getRiskLevel } from '../utils/marginRiskUtils';
import { useMarginAccountInfo } from '../../Margin';
import { MarginRiskIndicator } from './MarginRiskIndicator';
export const MarginChartWidget = () => {
    const [accountDetailsModalOpen, toggleAccountDetailsModal] = useReducer(v => !v, false);
    const { data: marginAccountInfo } = useMarginAccountInfo();
    const riskLevel = getRiskLevel(marginAccountInfo?.RiskLevel ?? 0, marginAccountInfo?.InMarginCall ?? false, marginAccountInfo?.InLiquidation ?? false);
    return (<Box p="m" alignItems="center">
      <MarginAccountDetailsModal modalVisible={accountDetailsModalOpen} handleClose={toggleAccountDetailsModal} marginAccountInfo={marginAccountInfo}/>
      <Box alignSelf="stretch" alignItems="flex-end">
        <TouchableOpacity onPress={toggleAccountDetailsModal}>
          <Text variant="bodyBold" color="brandSolid">
            {translate('wallet.marginChart.viewMore')}
          </Text>
        </TouchableOpacity>
      </Box>
      <MarginRiskIndicator riskLevel={riskLevel}/>
      <Text variant="headlineBold" marginVertical="l" textAlign="center">
        {formatCurrency(marginAccountInfo?.MarginBalance ?? 0, 'USD')}
      </Text>
    </Box>);
};
