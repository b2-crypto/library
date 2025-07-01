import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
export const PointUp = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      fill="#8393B7"
      fillRule="evenodd"
      d="M19.207 14.707a1 1 0 0 1-1.414 0L10.5 7.414l-7.293 7.293a1 1 0 0 1-1.414-1.414l8-8a1 1 0 0 1 1.414 0l8 8a1 1 0 0 1 0 1.414Z"
      clipRule="evenodd"
    />
  </Svg>
);
