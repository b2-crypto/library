import React from 'react';
import * as echarts from 'echarts/core';
import { LineChart as EchartsLineChart } from 'echarts/charts';
import { useTheme } from '@shopify/restyle';
import { Chart, ChartProps } from '../atoms';
import {
  DATA_ZOOM_CHART_START,
  MIN_CHART_ITEMS_COUNT,
} from '../../helpers/constants';
import { hexToRgbA } from '../../helpers/common';
import { getChartMarklineOptions } from '../../helpers/getChartMarklineOptions';
import { Theme } from '../../theme';
import {
  ChartLineType,
  AxisType,
  ChartDatasetType,
  LineChartDataType,
} from '../../types/chartTypes';

export type LineChartProps = {
  data: LineChartDataType;
  backgroundColor?: string;
  fillShadowGradientFrom?: string;
  fillShadowGradientTo?: string;
  fillInside?: boolean;
  lineColor?: string;
  isScrollDisabled?: boolean;
  showYLabels?: boolean;
  showXLabels?: boolean;
  showXTick?: boolean;
  showXMinLabel?: boolean;
  typeYLabels?: string;
  typeAxisLine?: string;
  typeGridLine?: string;
  withVerticalGrid?: boolean;
  withHorizontalGrid?: boolean;
  markLineValue?: number;
} & Omit<ChartProps, 'options'>;

// register extensions
echarts.use([EchartsLineChart]);

export const LineChart = ({
  data,
  backgroundColor,
  fillShadowGradientFrom,
  fillShadowGradientTo,
  lineColor,
  fillInside = true,
  isScrollDisabled = false,
  showYLabels = false,
  showXLabels = true,
  showXTick = true,
  showXMinLabel = false,
  typeYLabels = AxisType.value,
  typeAxisLine = ChartLineType.solid,
  typeGridLine = ChartLineType.solid,
  withVerticalGrid = true,
  withHorizontalGrid = true,
  markLineValue,
  minHeight = 200,
  ...chartProps
}: LineChartProps) => {
  const theme = useTheme<Theme>();

  const {
    colors,
    spacing,
    textVariants: { chartAxisText },
  } = theme;
  const { dataChart, dataXLabel } = data;

  const gridLineStyle = {
    color: colors.border3,
    type: typeGridLine,
  };

  const axisLineStyle = {
    color: colors.border1,
    type: typeAxisLine,
  };

  const axisLabel = {
    fontSize: chartAxisText.fontSize,
    color: colors.textSecondary,
  };

  const axisLine = {
    onZero: true,
    lineStyle: axisLineStyle,
  };

  const splitLine = {
    lineStyle: gridLineStyle,
  };

  const grid = {
    containLabel: true,
    left: 0,
    right: showYLabels ? spacing.m : 0,
    top: 0,
    bottom: showXLabels ? spacing.s : 0,
  };

  const xAxisProps = {
    type: AxisType.category,
    scale: true,
    boundaryGap: false, // start chart from X = 0
    axisTick: {
      show: showXTick,
    },
    splitLine: { ...splitLine, show: withVerticalGrid },
    axisLabel: {
      ...axisLabel,
      show: showXLabels,
      hideOverlap: true,
      margin: spacing.s,
      showMinLabel: showXMinLabel,
    },
    axisLine: {
      ...axisLine,
      show: showXLabels,
    },
    data: dataXLabel,
  };

  const yAxisProps = {
    position: 'right',
    type: typeYLabels,
    scale: true,
    splitLine: { ...splitLine, show: withHorizontalGrid },
    axisLabel: {
      ...axisLabel,
      show: showYLabels,
      margin: 5,
      formatter:
        typeYLabels === AxisType.time &&
        function (value: Date) {
          const date = new Date(value);
          function addZero(i: number) {
            if (i < 10) {
              return '0' + i;
            }
            return i.toString();
          }
          return `${addZero(date.getHours())}:${addZero(date.getMinutes())}`;
        },
    },
    axisTick: {
      show: showYLabels,
    },
    axisLine: {
      ...axisLine,
      show: showYLabels,
    },
  };

  const dataZoom = [
    {
      disabled: isScrollDisabled,
      type: 'inside', //scroll by Y enabled
      start:
        dataXLabel.length > MIN_CHART_ITEMS_COUNT && !isScrollDisabled
          ? DATA_ZOOM_CHART_START
          : 0,
      end: 100,
    },
    {
      disabled: isScrollDisabled,
      type: 'inside', //scroll by X enabled
    },
  ];

  const markLine = getChartMarklineOptions(colors, {
    yAxis: markLineValue,
  });

  const gradientColor = {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [
      {
        offset: 0,
        color: fillShadowGradientFrom
          ? fillShadowGradientFrom
          : hexToRgbA(colors.brandGradientFrom, 0.3),
      },
      {
        offset: 1,
        color: fillShadowGradientTo
          ? fillShadowGradientTo
          : hexToRgbA(colors.brandGradientTo, 0.05),
      },
    ],
  };

  const series = [
    {
      type: ChartDatasetType.line,
      symbol: 'none',
      lineStyle: {
        color: lineColor ? lineColor : colors.brandSolid,
        width: 1.25,
      },
      areaStyle: fillInside
        ? {
            color: gradientColor,
          }
        : null,
      data: dataChart,
      markLine: !!markLineValue && dataXLabel.length > 0 && markLine,
    },
  ];

  const option = {
    animation: false,
    grid: grid,
    xAxis: [xAxisProps],
    yAxis: [yAxisProps],
    dataZoom: dataZoom,
    series: series,
    backgroundColor: backgroundColor ? backgroundColor : colors.transparent,
  };

  return <Chart options={option} minHeight={minHeight} {...chartProps} />;
};
