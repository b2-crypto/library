import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { useTheme } from '@shopify/restyle';
import { StyleSheet } from 'react-native';

import { Box, Text } from '../../../components/atoms';
import { Theme } from '../../../theme';
import {
  RiskLevel,
  RiskLevelInfo,
  getActiveSegment,
  getRiskColorKey,
} from '../utils/marginRiskUtils';

interface MarginRiskIndicatorProps {
  riskLevel: RiskLevelInfo;
  size?: number;
}

const polarToCartesian = (rad: number, angleInDegrees: number) => {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: 0 + rad * Math.cos(angleInRadians),
    y: 0 + rad * Math.sin(angleInRadians),
  };
};

export const MarginRiskIndicator: React.FC<MarginRiskIndicatorProps> = ({
  riskLevel = { level: RiskLevel.UNKNOWN, riskNumber: 0, label: '--' },
  size = 200,
}) => {
  const { colors } = useTheme<Theme>();
  const radius = size * 0.45;

  const totalArc = 240;
  const numSegments = 5;
  const segmentSize = totalArc / numSegments;
  const startAngle = -120;

  const riskColors = [
    colors.riskVeryLow,
    colors.riskLow,
    colors.riskMedium,
    colors.riskHigh,
    colors.riskVeryHigh,
  ];

  const segments = Array.from({ length: numSegments }, (_, index) => ({
    start: startAngle + index * segmentSize,
    end: startAngle + (index + 1) * segmentSize,
    color: riskColors[index],
  }));

  const activeSegmentIndex = getActiveSegment(riskLevel.riskNumber);
  const riskColorKey = getRiskColorKey(riskLevel.riskNumber);

  return (
    <Box alignItems="center" position="relative">
      <Svg width={size} height={size * 0.65} viewBox="-90 -95 200 145">
        {segments.map((segment, index) => {
          const isActive = index === activeSegmentIndex;
          const outerRadius = radius;
          const innerRadius = isActive ? radius - 40 : radius - 22;

          const outerStart = polarToCartesian(outerRadius, segment.start);
          const outerEnd = polarToCartesian(outerRadius, segment.end);
          const innerStart = polarToCartesian(innerRadius, segment.start);
          const innerEnd = polarToCartesian(innerRadius, segment.end);

          const largeArcFlag = segment.end - segment.start <= 180 ? '0' : '1';

          const path = [
            'M',
            outerStart.x,
            outerStart.y,
            'A',
            outerRadius,
            outerRadius,
            0,
            largeArcFlag,
            1,
            outerEnd.x,
            outerEnd.y,
            'L',
            innerEnd.x,
            innerEnd.y,
            'A',
            innerRadius,
            innerRadius,
            0,
            largeArcFlag,
            0,
            innerStart.x,
            innerStart.y,
            'Z',
          ].join(' ');

          return <Path key={index} d={path} fill={segment.color} />;
        })}
      </Svg>
      <Text
        style={style.riskAmount}
        color={riskColorKey}
        variant="riskIndicator">
        {riskLevel.riskNumber}
      </Text>
      <Text variant="bodyBold" color={riskColorKey}>
        {riskLevel.label}
      </Text>
    </Box>
  );
};

const style = StyleSheet.create({
  riskAmount: {
    position: 'absolute',
    top: '45%',
  },
});
