import React, { memo } from 'react';
import Svg, { Path } from 'react-native-svg';
const SvgComponent = (props) => (<Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <Path fill={props.color || '#8393B7'} d="M0 4a1 1 0 0 1 2 0v12a1 1 0 1 1-2 0V4Z"/>
    <Path fill={props.color || '#8393B7'} d="M1.788 5.192a1 1 0 1 1 1.231-1.576l7.88 6.156a1 1 0 1 1-1.23 1.576L1.787 5.192Z"/>
    <Path fill={props.color || '#8393B7'} d="M18.9 5.192a1 1 0 1 0-1.232-1.576l-7.88 6.156a1 1 0 1 0 1.231 1.576l7.88-6.156Z"/>
    <Path fill={props.color || '#8393B7'} d="M18 4a1 1 0 1 1 2 0v12a1 1 0 1 1-2 0V4Z"/>
    <Path fill={props.color || '#8393B7'} d="M0 3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v1H0V3ZM0 17a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-1H0v1Z"/>
  </Svg>);
export const Email = memo(SvgComponent);
