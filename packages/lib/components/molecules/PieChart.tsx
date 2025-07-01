import React from 'react';
import * as echarts from 'echarts/core';
import { PieChart as EchartsPieChart } from 'echarts/charts';
import { ChartDatasetType } from '../../types/chartTypes';
import { Chart, ChartProps } from '../atoms';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../theme';

export type PieChartProps = {
  data: { value: number }[];
  colors: string[];
} & Omit<ChartProps, 'options'>;

// register extensions
echarts.use([EchartsPieChart]);

export const PieChart = ({
  data,
  colors,
  minHeight = 150,
  ...chartProps
}: PieChartProps) => {
  const theme = useTheme<Theme>();
  const { colors: themeColors } = theme;

  const option = {
    series: [
      {
        type: ChartDatasetType.pie,
        data: data,
        silent: true,

        radius: ['55%', '100%'],
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },
        emptyCircleStyle: {
          color: themeColors.border3,
        },
      },
    ],

    label: {
      show: false,
    },
    color: colors,
  };

  return <Chart options={option} minHeight={minHeight} {...chartProps} />;
};
