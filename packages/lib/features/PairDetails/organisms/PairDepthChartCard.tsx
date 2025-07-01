import React, { useMemo } from 'react';
import { useTheme } from '@shopify/restyle';
import { Box, Text } from '../../../components/atoms';
import { DepthChart } from '../../../components/molecules';
import { translate } from '../../../helpers/i18n';
import { ActivityIndicator } from 'react-native';
import { Theme } from '../../../theme';
import { DepthChartDataType } from '../../../types/chartTypes';
import { useOrderBook } from '../../../hooks';
import { formatDataForDepthChart } from '../../../helpers/formatDataForDepthChart';
import { testID } from '../../../helpers/testId';

interface DepthChartDataProps {
  bestPrice: number;
  askData: DepthChartDataType;
  bidData: DepthChartDataType;
}

interface PriceChartProps {
  chartData: DepthChartDataProps;
  isLoading: boolean;
}

export const PairDepthChartCard = ({
  chartData,
  isLoading,
}: PriceChartProps) => {
  const theme = useTheme<Theme>();

  return (
    <>
      <Box
        borderBottomColor="border3"
        borderBottomWidth={1}
        padding="m"
        accessible
        accessibilityLabel="Depth chart"
        {...testID('depthChart')}>
        <Text variant="bodyBold" color="textPrimary">
          {translate('depthChart')}
        </Text>
      </Box>
      {isLoading ? (
        <Box minHeight={120} justifyContent="center">
          <ActivityIndicator size="small" color={theme.colors.border2} />
        </Box>
      ) : (
        <DepthChart askData={chartData.askData} bidData={chartData.bidData} />
      )}
    </>
  );
};

interface PairDepthChartCardWidgetProps {
  instrumentId: number;
}

export const PairDepthChartCardWidget = ({
  instrumentId,
}: PairDepthChartCardWidgetProps) => {
  const { isLoading, orderBookBuy, orderBookSell } = useOrderBook(instrumentId);

  const depthChartData = useMemo(
    () => formatDataForDepthChart(orderBookBuy, orderBookSell),
    [orderBookBuy, orderBookSell],
  );

  return (
    <PairDepthChartCard chartData={depthChartData} isLoading={isLoading} />
  );
};
