import React from 'react';
import * as echarts from 'echarts/core';
import { PieChart as EchartsPieChart } from 'echarts/charts';
import { ChartDatasetType } from '../../types/chartTypes';
import { Chart } from '../atoms';
import { useTheme } from '@shopify/restyle';
// register extensions
echarts.use([EchartsPieChart]);
export const PieChart = ({ data, colors, minHeight = 150, ...chartProps }) => {
    const theme = useTheme();
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
    return <Chart options={option} minHeight={minHeight} {...chartProps}/>;
};
