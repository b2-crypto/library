import React, { memo } from 'react';
import Svg, { Path } from 'react-native-svg';
const SvgComponent = (props) => (<Svg width={22} height={2} fill="none" {...props}>
    <Path stroke="#8393B7" strokeLinecap="round" strokeWidth={2} d="M1 1h20"/>
  </Svg>);
export const Line = memo(SvgComponent);
