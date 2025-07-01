import React, { useState, useMemo, useCallback } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { useTheme } from '@shopify/restyle';

import { formatBarChartData, usePriceChartData } from '../hooks';
import { PeriodFilterTabBtnsArr } from '../../../helpers/constants';
import { translate } from '../../../helpers/i18n';
import { Text, View, Box } from '../../../components/atoms';
import {
  CandleStickChart,
  LineChart,
  Tabs,
} from '../../../components/molecules';
import { PeriodFilter } from '../../../components/organisms';
import { testID } from '../../../helpers/testId';

interface PriceChartProps {
  instrumentId: number;
  skipQuery?: boolean;
}

type ChartTabs = 'candle' | 'area';

const CHART_TABS_ARR: ChartTabs[] = ['candle', 'area'];

export const PairPriceChart = ({
  instrumentId,
  skipQuery,
}: PriceChartProps) => {
  const theme = useTheme();
  const isFocused = useIsFocused();

  const [chartScale, setChartScale] = useState(PeriodFilterTabBtnsArr[0]);
  const [chartView, setChartView] = useState<ChartTabs>('candle');

  const shouldQuery = useMemo(
    () => isFocused && !skipQuery,
    [isFocused, skipQuery],
  );

  const { data, isLoading, isFetching, currentData } = usePriceChartData({
    instrumentId: instrumentId,
    interval: chartScale.interval,
    timeframe: chartScale.value,
    shouldQuery,
  });

  const chartViewBtns = useMemo(
    () =>
      CHART_TABS_ARR.map(id => ({
        value: id,
        label: translate(id),
      })),
    [],
  );

  const handleChartInterval = useCallback(
    (value: number) => {
      const newChartScale = PeriodFilterTabBtnsArr.find(
        item => item.value === value,
      );
      if (newChartScale) {
        setChartScale(newChartScale);
      }
    },
    [setChartScale],
  );

  const { markLineValue, lineChartData, candleStickChartData } = useMemo(
    () => formatBarChartData(chartScale, data),
    [chartScale, data],
  );

  if (!data || isLoading) {
    return <ActivityIndicator size="large" style={styles.spinner} />;
  }

  return (
    <>
      <View
        borderBottomColor="border3"
        borderBottomWidth={1}
        flexDirection="row"
        justifyContent="space-between"
        paddingVertical="xs"
        paddingHorizontal="m"
        {...testID('priceChart')}>
        <Box justifyContent="center">
          <Text
            variant="bodyBold"
            color="textPrimary"
            accessibilityRole="header"
            {...testID('priceChartHeader')}>
            {translate('priceChart')}
          </Text>
        </Box>
        <Box>
          <Tabs
            type="pills_narrow"
            data={chartViewBtns}
            value={chartView}
            onChange={setChartView}
            wrapperProps={{
              accessibilityLabel: 'Price chart toggler',
              ...testID('priceChartVariants'),
            }}
          />
        </Box>
      </View>
      <Box
        marginBottom="s"
        accessible
        accessibilityLabel="Chart"
        {...testID('priceChart')}>
        {chartView === 'candle' ? (
          <CandleStickChart
            markLineValue={markLineValue}
            data={candleStickChartData}
          />
        ) : (
          <LineChart
            showXLabels
            showYLabels
            markLineValue={markLineValue}
            data={lineChartData}
          />
        )}
        {isFetching && !currentData && (
          <Box
            justifyContent="center"
            style={StyleSheet.absoluteFill}
            bg="white"
            {...testID('spinner')}
            accessible={false}>
            <ActivityIndicator size="small" color={theme.colors.border2} />
          </Box>
        )}
      </Box>
      <PeriodFilter value={chartScale.value} onChange={handleChartInterval} />
    </>
  );
};

const styles = StyleSheet.create({
  spinner: {
    margin: 10,
  },
});
