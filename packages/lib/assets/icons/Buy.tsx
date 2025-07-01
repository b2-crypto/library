import React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const Buy = (props: SvgProps) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="currentColor"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.707 8.707 10 13.414 5.293 8.707a.999.999 0 1 1 1.414-1.414L9 9.586V3a1 1 0 0 1 2 0v6.586l2.293-2.293a.999.999 0 1 1 1.414 1.414Zm3.536 1.64a1 1 0 0 1 1.514 1.307L14.275 18H5.718L.243 11.662a1 1 0 0 1 1.514-1.307L6.633 16h6.727l4.883-5.654Z"
      fill={props.color || '#00C938'}
    />
  </Svg>
);
