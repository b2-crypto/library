import { ChartLineType } from '../types/chartTypes';

type MarkLinePosition = {
  yAxis?: number;
  xAxis?: number;
};

export const getChartMarklineOptions = (
  colors: any,
  markLinePosition?: MarkLinePosition,
) => ({
  symbol: 'none',
  animation: false,
  data: [
    {
      type: 'average',
      ...(markLinePosition || {}),
    },
  ],
  lineStyle: {
    color: colors.brandSolid,
    type: ChartLineType.solid,
    width: 2,
  },
  label: {
    position: 'end',
    color: colors.textInverse,
    backgroundColor: colors.brandSolid,
    padding: [2, 2, 2, 2],
  },
});
