import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
export const Cross = (props) => (<Svg width={24} height={24} fill="none" {...props}>
    <Path fillRule="evenodd" clipRule="evenodd" d="m11.414 10 4.293-4.293a1 1 0 0 0-1.414-1.414L10 8.586 5.707 4.293a1 1 0 0 0-1.414 1.414L8.586 10l-4.293 4.293a1 1 0 1 0 1.414 1.414L10 11.414l4.293 4.293a1 1 0 0 0 1.414-1.414L11.414 10Z" fill={props.color || '#fff'}/>
  </Svg>);
export default Cross;
