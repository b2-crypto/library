import { ChartLineType } from '../types/chartTypes';
type MarkLinePosition = {
  yAxis?: number;
  xAxis?: number;
};
export declare const getChartMarklineOptions: (
  colors: any,
  markLinePosition?: MarkLinePosition,
) => {
  symbol: string;
  animation: boolean;
  data: {
    yAxis?: number | undefined;
    xAxis?: number | undefined;
    type: string;
  }[];
  lineStyle: {
    color: any;
    type: ChartLineType;
    width: number;
  };
  label: {
    position: string;
    color: any;
    backgroundColor: any;
    padding: number[];
  };
};
export {};
