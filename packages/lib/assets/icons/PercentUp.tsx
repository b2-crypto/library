import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const PercentUp = ({color = "#00C938", ...props}: SvgProps & { color?: string }) => (
  <Svg width={7} height={10} viewBox="0 0 7 10" fill="none" {...props}>
    <Path fillRule="evenodd" clipRule="evenodd" d="M7 4L3.5 0L0 4H3V10H4.11443V4H7Z" fill={color} />
  </Svg>
);
