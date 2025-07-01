import React, { useMemo } from 'react';
import * as echarts from 'echarts/core';
import { LineChart as EchartsLineChart } from 'echarts/charts';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../theme';
import { hexToRgbA } from '../../helpers/common';
import { formatUSD } from '../../helpers/format';
import {
  ChartLineType,
  AxisType,
  ChartDatasetType,
  DepthChartDataType,
} from '../../types/chartTypes';
import { Chart, ChartProps } from '../atoms';

export type DepthChartProps = {
  askData: DepthChartDataType;
  bidData: DepthChartDataType;
  backgroundColor?: string;
} & Omit<ChartProps, 'options'>;

// // register extensions
echarts.use([EchartsLineChart]);

export const DepthChart = ({
  askData,
  bidData,
  backgroundColor,
  minHeight = 130,
  ...chartProps
}: DepthChartProps) => {
  const theme = useTheme<Theme>();

  const {
    colors,
    spacing,
    textVariants: { chartAxisText, chartMarklineText },
  } = theme;
  const { dataChart: askDataY, dataXLabel: askDataX } = askData;
  const { dataChart: bidDataY, dataXLabel: bidDataX } = bidData;

  const { asksValues, bidsValues, minX, maxX, bestPrice } = useMemo(() => {
    const asksValues = [];
    const bidsValues = [];

    for (let i = 0; i < askDataX.length; i++) {
      asksValues.push([askDataX[i], askDataY[i]]);
    }
    for (let i = 0; i < bidDataX.length; i++) {
      bidsValues.push([bidDataX[i], bidDataY[i]]);
    }

    // calculate chart's visible area with bestPrice value centered
    const minBid = Math.min(...bidDataX);
    const maxBid = Math.max(...bidDataX);
    const minAsk = Math.min(...askDataX);
    const maxAsk = Math.max(...askDataX);

    const bestPrice = (minAsk - maxBid) / 2 + maxBid;
    const maxInterval = Math.max(bestPrice - minBid, maxAsk - bestPrice);

    const minX = bestPrice - maxInterval;
    const maxX = bestPrice + maxInterval;

    // Add fake items to the start/end so the chart lines reach the left/right side.
    if (minBid > minX && bidsValues.length) {
      bidsValues.unshift([minX, bidsValues[0][1]])
    }
    if (maxAsk < maxX && asksValues.length) {
      asksValues.push([maxX, asksValues[asksValues.length - 1][1]]);
    }

    return {
      asksValues,
      bidsValues,
      minX,
      maxX,
      bestPrice,
    };
  }, [askDataY, askDataX, bidDataY, bidDataX]);

  const axisLineStyle = {
    color: colors.border1,
    type: ChartLineType.solid,
  };

  const axisLabel = {
    fontSize: chartAxisText.fontSize,
    color: colors.textSecondary,
  };

  const axisLine = {
    show: true,
    onZero: true,
    lineStyle: axisLineStyle,
  };

  const grid = {
    containLabel: true,
    left: 0,
    right: spacing.s,
    top: spacing.sm,
    bottom: spacing.s,
  };

  const xAxisProps = {
    type: AxisType.value,
    scale: true,
    axisTick: {
      show: true,
    },
    splitLine: { show: false },
    axisLabel: {
      ...axisLabel,
      show: true,
      hideOverlap: true,
      margin: spacing.s,
      showMinLabel: false,
      showMaxLabel: false,
    },
    axisLine,
    min: minX,
    max: maxX,
    splitNumber: 4,
  };

  const yAxisProps = {
    position: 'right',
    type: AxisType.value,
    splitLine: { show: false },
    axisLabel: {
      ...axisLabel,
      margin: spacing.s,
    },
    axisTick: {
      show: true,
      length: 3,
    },
    axisLine,
    splitNumber: 2,
  };

  const dataZoom = [
    {
      disabled: true, //scroll by Y disabled
      type: 'inside',
    },
    {
      disabled: true, //scroll by X disabled
      type: 'inside',
    },
  ];

  const bestPriceMarkline = {
    symbol: 'none',
    animation: false,

    lineStyle: {
      color: colors.border1,
    },
    label: {
      ...chartMarklineText,
      position: 'end',
      borderColor: colors.button2ndBorder,
      borderRadius: 6,
      borderWidth: 0.5,
      backgroundColor: colors.background2,
      padding: [5, 5, 4, 5],
      distance: [0, -20],
      color: colors.textPrimary,
      formatter: () => formatUSD(bestPrice),
    },
    data: [
      {
        xAxis: bestPrice,
      },
    ],
  };

  const option = {
    animation: false,
    grid: grid,
    xAxis: [xAxisProps],
    yAxis: [yAxisProps],
    dataZoom: dataZoom,
    series: [
      {
        name: 'bids',
        type: ChartDatasetType.line,
        lineStyle: {
          color: colors.buy,
        },
        areaStyle: {
          color: hexToRgbA(colors.buyDisabled, 0.3),
        },
        showSymbol: false,
        data: bidsValues,
        markLine: bestPriceMarkline,
      },
      {
        name: 'asks',
        type: ChartDatasetType.line,
        lineStyle: {
          color: colors.sell,
        },
        areaStyle: {
          color: hexToRgbA(colors.sellDisabled, 0.3),
        },

        showSymbol: false,
        data: asksValues,
      },
    ],
    backgroundColor: backgroundColor ? backgroundColor : colors.transparent,
  };

  return <Chart options={option} minHeight={minHeight} {...chartProps} />;
};
