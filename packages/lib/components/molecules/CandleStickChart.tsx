import React from 'react';
import * as echarts from 'echarts/core';
import { CandlestickChart as EchartsCandleStickChart } from 'echarts/charts';
import { useTheme } from '@shopify/restyle';
import { hexToRgbA } from '../../helpers/common';
import { getChartMarklineOptions } from '../../helpers/getChartMarklineOptions';
import {
  DATA_ZOOM_CHART_START,
  MIN_CHART_ITEMS_COUNT,
} from '../../helpers/constants';
import { Theme } from '../../theme';
import {
  ChartLineType,
  AxisType,
  ChartDatasetType,
  CandlestickChartDataType,
} from '../../types/chartTypes';
import { Chart, ChartProps } from '../atoms';

export type CandleStickChartProps = {
  data: CandlestickChartDataType;
  markLineValue?: number;
} & Omit<ChartProps, 'options'>;

// // register extensions
echarts.use([EchartsCandleStickChart]);

export const CandleStickChart = ({
  data,
  width,
  height,
  markLineValue,
  minHeight = 200,
  ...chartProps
}: CandleStickChartProps) => {
  const theme = useTheme<Theme>();
  const {
    colors,
    spacing,
    textVariants: { chartAxisText },
  } = theme;
  const { dataChart, dataXLabel } = data;

  const gridLineStyle = {
    color: colors.border3,
    type: ChartLineType.solid,
  };

  const axisLineStyle = {
    color: colors.border1,
    type: ChartLineType.solid,
  };

  const axisLabel = {
    fontSize: chartAxisText.fontSize,
    color: colors.textSecondary,
  };

  const axisLine = {
    lineStyle: axisLineStyle,
  };

  const splitLine = {
    show: true,
    lineStyle: gridLineStyle,
  };

  const grid = {
    containLabel: true,
    left: '0',
    right: spacing.m,
    top: spacing.sm,
    bottom: '0',
  };

  const xAxisProps = {
    type: AxisType.category,
    data: dataXLabel,
    scale: true,
    boundaryGap: false,
    splitLine,
    min: 'dataMin',
    max: 'dataMax',
    axisLabel,
    axisLine: {
      ...axisLine,
      onZero: false,
    },
    axisPointer: {
      status: 'hide',
    },
  };

  const yAxisProps = {
    position: 'right',
    scale: true,
    splitLine,
    axisLabel,
    axisLine,
  };

  const dataZoom = [
    {
      type: 'inside', //scroll by Y enabled
      start:
        dataXLabel.length > MIN_CHART_ITEMS_COUNT ? DATA_ZOOM_CHART_START : 0,
      end: 100,
    },
    {
      type: 'inside', //scroll by X enabled
    },
  ];

  const markLine = getChartMarklineOptions(colors, {
    yAxis: markLineValue,
  });

  const itemChartStyle = {
    color: hexToRgbA(colors.buyDisabled, 0.3), //color for positive
    borderColor: colors.buy,
    color0: hexToRgbA(colors.sellDisabled, 0.3), //color for negative
    borderColor0: colors.sell,
  };

  const option = {
    tooltip: {
      show: false,
    },
    grid: grid,
    xAxis: xAxisProps,
    yAxis: yAxisProps,
    dataZoom: dataZoom,
    series: [
      {
        name: 'candlestick',
        type: ChartDatasetType.candlestick,
        markLine: !!markLineValue && dataXLabel.length > 0 && markLine,
        data: dataChart,
        barWidth: 5,
        itemStyle: itemChartStyle,
      },
    ],
  };

  return <Chart options={option} minHeight={minHeight} {...chartProps} />;
};
