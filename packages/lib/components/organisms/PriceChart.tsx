import React, { memo, useMemo } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useTheme } from '@shopify/restyle';
import format from 'date-fns/format';

import { hexToRgbA } from '../../helpers/common';
import { formatCurrency } from '../../helpers/format';
import { useGetTickerHistoryQuery } from '../../services/apexApi';
import { ChartLineType } from '../../types/chartTypes';

import { Box, Text } from '../atoms';
import { LineChart } from '../molecules';
import { Theme } from '../../theme';

const TICKER_QUERY_INTERVAL_SECONDS = 3600;
const TICKER_QUERY_TIMEFRAME = 24 * 3600;
const TICKER_POLLING_INTERVAL_MS = 10000;

export type PriceChartWidgetProps = {
  instrumentId: number;
  symbol: string;
  color?: string;
};

type PriceChartProps = {
  data: Array<{ x: string; y: number }>;
  color?: string;
  symbol: string;
};

export const PriceChart = memo(({ data, color, symbol }: PriceChartProps) => {
  const theme = useTheme<Theme>();
  const chartData = useMemo(() => {
    const dataChart = data.map(i => i.y);
    const dataXLabel = data.map(i => i.x);
    return { dataChart, dataXLabel };
  }, [data]);

  const min = chartData.dataChart.length ? Math.min(...chartData.dataChart) : 0;
  const max = chartData.dataChart.length ? Math.max(...chartData.dataChart) : 0;

  const chartColor = color || theme.colors.brandGradientFrom;

  return (
    <Box position="relative">
      <Box
        alignItems="flex-end"
        position="absolute"
        right={0}
        top={0}
        zIndex={1}
        elevation={1}>
        <Box
          alignSelf="flex-end"
          pr="s"
          style={{
            backgroundColor: hexToRgbA(theme.colors.background2, 0.6),
          }}>
          <Text variant="chartAxisText" color="textSecondary">
            {max ? formatCurrency(max, symbol, 2) : ''}
          </Text>
        </Box>
      </Box>
      <Box
        alignItems="flex-end"
        position="absolute"
        right={0}
        bottom={27}
        zIndex={1}
        elevation={1}>
        <Box
          alignSelf="flex-end"
          pr="s"
          style={{
            backgroundColor: hexToRgbA(theme.colors.background2, 0.6),
          }}>
          <Text variant="chartAxisText" color="textSecondary">
            {min ? formatCurrency(min, symbol, 2) : ''}
          </Text>
        </Box>
      </Box>
      <LineChart
        height={120}
        data={chartData}
        isScrollDisabled
        showXLabels
        showXTick={false}
        fillShadowGradientFrom={hexToRgbA(chartColor, 0.3)}
        fillShadowGradientTo={hexToRgbA(chartColor, 0.05)}
        lineColor={chartColor}
        typeAxisLine={ChartLineType.dashed}
        withVerticalGrid={false}
        withHorizontalGrid={false}
      />
    </Box>
  );
});

PriceChart.displayName = 'PriceChart';

const styles = StyleSheet.create({
  spinner: { marginVertical: 20 },
});

export const PriceChartWidget = memo(
  ({ instrumentId, ...props }: PriceChartWidgetProps) => {
    const theme = useTheme<Theme>();
    const isFocused = useIsFocused();

    const { data: priceChartData, isLoading } = useGetTickerHistoryQuery(
      isFocused
        ? {
            instrumentId,
            interval: TICKER_QUERY_INTERVAL_SECONDS,
            timeframe: TICKER_QUERY_TIMEFRAME,
          }
        : skipToken,
      {
        pollingInterval: TICKER_POLLING_INTERVAL_MS,
        refetchOnFocus: true,
        selectFromResult: ({ data, ...rest }) => {
          return data?.length
            ? {
                data: data.map(item => ({
                  x: format(new Date(item.time), 'H:mm'),
                  y: item.high,
                })),
                ...rest,
              }
            : { data: [], ...rest };
        },
      },
    );

    if (isLoading) {
      return (
        <ActivityIndicator
          size="large"
          style={styles.spinner}
          color={theme.colors.brandSolid}
        />
      );
    }

    return (
      <PriceChart
        {...props}
        data={isFocused && priceChartData ? priceChartData : []}
      />
    );
  },
);
PriceChartWidget.displayName = 'PriceChartWidget';
