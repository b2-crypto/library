import React, { memo } from 'react';
import Svg, { Path } from 'react-native-svg';
const SvgComponent = (props) => (<Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <Path fill={props.color || '#00C938'} fillRule="evenodd" d="M14.707 8.707 10 13.414 5.293 8.707a.999.999 0 1 1 1.414-1.414L9 9.586V3a1 1 0 0 1 2 0v6.586l2.293-2.293a.999.999 0 1 1 1.414 1.414ZM17 13v3H3v-3a1 1 0 0 0-2 0v5h18v-5a1 1 0 0 0-2 0Z" clipRule="evenodd"/>
  </Svg>);
export const Deposit = memo(SvgComponent);
