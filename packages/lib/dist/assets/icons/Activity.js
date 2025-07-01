import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
export const Activity = (props) => (<Svg width={20} height={20} fill="none" {...props}>
    <Path d="M1 10.5h3.068l2.484-6 3.567 13 3.509-10.888 2.548 3.888H19" stroke={props.fill || '#8393B7'} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill={props.fill}/>
  </Svg>);
