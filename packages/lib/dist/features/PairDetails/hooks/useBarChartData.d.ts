import { ApexFrame } from '../../../helpers/apiTransformers';
import { ChartScalePillBtn } from '../../../helpers/constants';
import {
  NumericChartData,
  DimensionalChartData,
  TextChartLabel,
} from '../../../types/chartTypes';
export declare const formatBarChartData: (
  chartScale: ChartScalePillBtn<number>,
  data?: ApexFrame[],
) => {
  markLineValue: number;
  lineChartData: {
    dataChart: NumericChartData;
    dataXLabel: TextChartLabel;
  };
  candleStickChartData: {
    dataChart: DimensionalChartData;
    dataXLabel: TextChartLabel;
  };
};
