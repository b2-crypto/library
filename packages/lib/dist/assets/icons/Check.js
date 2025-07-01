import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
export const Check = (props) => (<Svg width={24} height={24} fill="none" {...props}>
    <Path d="M17.293 3.293a1 1 0 1 1 1.414 1.414L6.918 16.496a1 1 0 0 1-1.414 0l-4.211-4.211a1 1 0 1 1 1.414-1.414l3.504 3.504L17.293 3.293Z" fill={props?.fill || '#5576FA'}/>
  </Svg>);
