import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const PercentDown = ({color = "#E81F5B", ...props}: SvgProps & { color?: string }) => (
  <Svg width={7} height={10} viewBox="0 0 7 10" fill="none" {...props}>
    <Path fillRule="evenodd" clipRule="evenodd" d="M7 6L3.5 10L0 6H3V0H4.11443V6H7Z" fill={color} />
  </Svg>
);
