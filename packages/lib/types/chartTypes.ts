export enum ChartLineType {
  solid = 'solid',
  dashed = 'dashed',
  dotted = 'dotted',
}
export enum AxisType {
  value = 'value',
  category = 'category',
  time = 'time',
  log = 'log',
}
export enum ChartDatasetType {
  line = 'line',
  candlestick = 'candlestick',
  pie = 'pie',
}

export enum ChartType {
  lineChart = 'lineChart',
  depthChart = 'depthChart',
  candleStickChart = 'candleStickChart',
  pieChart = 'pieChart',
}

export type NumericChartData = number[];
export type DimensionalChartData = number[][];

export type NumericChartLabel = number[];
export type TextChartLabel = string[];

export type LineChartDataType = {
  dataChart: NumericChartData;
  dataXLabel: NumericChartLabel | TextChartLabel;
};

export type CandlestickChartDataType = {
  dataChart: DimensionalChartData;
  dataXLabel: NumericChartLabel | TextChartLabel;
};

export type DepthChartDataType = {
  dataChart: NumericChartData;
  dataXLabel: NumericChartLabel;
};
