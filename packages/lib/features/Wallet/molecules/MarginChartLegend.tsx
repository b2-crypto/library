import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Line, Svg } from 'react-native-svg';
import { Box, Text } from '../../../components/atoms';
import { translate } from '../../../helpers/i18n';

type BoxProps = React.ComponentProps<typeof Box>;

const Circle = ({ color }: { color: string }) => (
  <Box
    width={9}
    height={9}
    mr="xs"
    borderRadius={9}
    style={{ backgroundColor: color }}
  />
);

const Row = ({ children, ...props }: BoxProps) => (
  <Box flexDirection="row" alignItems="center" {...props}>
    {children}
  </Box>
);
const Label = ({ children }: { children: string }) => (
  <Text variant="captionReg" color="textSecondary">
    {children}
  </Text>
);

export const MarginChartLegend = ({ width }: { width: number }) => (
  <Box width={width} flexDirection="row" justifyContent="space-between">
    <Box flexDirection="column">
      <Row mb="sm">
        <Circle color="#04C6A3" />
        <Label>{translate('wallet.marginChart.collateralValue')}</Label>
      </Row>
      <Row mb="sm">
        <Circle color="#5888FD" />
        <Label>{translate('wallet.marginChart.positionsValue')}</Label>
      </Row>
      <Row>
        <Circle color="#FC4D16" />
        <Label>{translate('wallet.marginChart.pnlLabel')}</Label>
      </Row>
    </Box>
    <Box flexDirection="column">
      <Row mb="sm">
        <Svg width={2} height={13} style={styles.svg}>
          <Line
            x1={0}
            y1={0}
            x2={0}
            y2={13}
            strokeWidth={4}
            stroke="black"
            strokeDasharray="4"
          />
        </Svg>
        <Label>{translate('wallet.marginChart.marginCallMarker')}</Label>
      </Row>
      <Row mb="sm">
        <Svg width={2} height={13} style={styles.svg}>
          <Line x1={0} y1={0} x2={0} y2={13} strokeWidth={2} stroke="black" />
        </Svg>
        <Label>{translate('wallet.marginChart.liquidationMarker')}</Label>
      </Row>
    </Box>
  </Box>
);

const styles = StyleSheet.create({
  svg: { marginRight: 8 },
});
