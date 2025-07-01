import React from 'react';
import Svg, { Path } from 'react-native-svg';
export const Sell = (props) => (<Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <Path fillRule="evenodd" clipRule="evenodd" d="M9 5.828 6.707 8.121a.999.999 0 1 1-1.414-1.414L10 2l4.707 4.707a.999.999 0 1 1-1.414 1.414L11 5.828V13a1 1 0 0 1-2 0V5.828Zm9.243 4.518a1 1 0 0 1 1.514 1.308L14.275 18H5.718L.243 11.662a1 1 0 0 1 1.514-1.307L6.633 16h6.727l4.883-5.654Z" fill={props.color || '#E81F5B'}/>
  </Svg>);
