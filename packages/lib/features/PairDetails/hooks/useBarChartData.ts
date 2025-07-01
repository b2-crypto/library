import diff from 'date-fns/differenceInSeconds';
import format from 'date-fns/format';

import { ApexFrame } from '../../../helpers/apiTransformers';
import { ChartScalePillBtn } from '../../../helpers/constants';
import {
  NumericChartData,
  DimensionalChartData,
  TextChartLabel,
} from '../../../types/chartTypes';

export const formatBarChartData = (
  chartScale: ChartScalePillBtn<number>,
  data?: ApexFrame[],
) => {
  const dataXLabel: TextChartLabel = [],
    lineChart: NumericChartData = [],
    candleStickChart: DimensionalChartData = [];

  const NOW = new Date();
  data?.forEach(item => {
    const date = new Date(item.time);
    // Limit data for the selected interval
    if (diff(date, NOW) < chartScale.value) {
      lineChart.push(item.close);
      dataXLabel.push(format(date, chartScale.formatter || ''));
      candleStickChart.push([item.open, item.close, item.high, item.low]);
    }
  });

  const markLineValue = lineChart[lineChart.length - 1];
  const lineChartData = { dataChart: lineChart, dataXLabel: dataXLabel };
  const candleStickChartData = {
    dataChart: candleStickChart,
    dataXLabel: dataXLabel,
  };

  return { markLineValue, lineChartData, candleStickChartData };
};
