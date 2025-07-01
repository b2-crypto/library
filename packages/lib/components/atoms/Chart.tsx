import React, { useEffect, useRef, useState } from 'react';
import { SvgChart, SVGRenderer } from './rn-echarts';
import * as echarts from 'echarts/core';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DataZoomComponent,
  MarkLineComponent,
} from 'echarts/components';
import { ViewStyle } from 'react-native';
import { View } from './View';

// register extensions
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DataZoomComponent,
  MarkLineComponent,
  SVGRenderer,
]);

type ContainerDimensions = {
  width?: number;
  height?: number;
};

export type ChartProps = {
  minHeight?: number;
  width?: number;
  height?: number;
  wrapperStyles?: ViewStyle;
  options: { [key: string]: unknown };
};

export const Chart = ({
  minHeight,
  width: containerWidth,
  height: containerHeight,
  wrapperStyles,
  options,
}: ChartProps) => {
  const chartRef = useRef<any>(null);
  const svgRef = useRef<any>(null);
  const [{ width, height }, setContainerDimensions] =
    useState<ContainerDimensions>({});

  useEffect(() => {
    if (svgRef.current && width && height) {
      if (!chartRef.current) {
        chartRef.current = echarts.init(svgRef.current, undefined, {
          renderer: 'svg',
          width,
          height,
        });
      }
      const currentChartWidth = chartRef.current?.getWidth();
      const currentChartHeight = chartRef.current?.getHeight();
      if (currentChartWidth !== width || currentChartHeight !== height) {
        chartRef.current.resize({
          width,
          height,
        });
      }
      chartRef.current?.setOption(options);
    }
  }, [width, height, options]);

  useEffect(() => {
    return () => chartRef.current?.dispose();
  }, []);

  return (
    <View
      style={{
        width: containerWidth,
        height: containerHeight,
        minHeight:
          !!minHeight && !!containerHeight
            ? Math.min(minHeight, containerHeight)
            : minHeight || containerHeight,
        ...wrapperStyles,
      }}
      onLayout={event => {
        const { width, height } = event.nativeEvent.layout;
        setContainerDimensions({ width, height });
      }}>
      <SvgChart ref={svgRef} />
    </View>
  );
};
