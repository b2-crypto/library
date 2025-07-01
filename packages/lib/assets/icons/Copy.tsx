import React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const Copy = (props: SvgProps) => (
  <Svg width="17" height="20" viewBox="0 0 17 20" fill="none" {...props}>
    <Path
      d="M12 15H15C15.5523 15 16 14.5523 16 14V2C16 1.44772 15.5523 1 15 1H6C5.44772 1 5 1.44772 5 2V5M2 19H11C11.5523 19 12 18.5523 12 18V6C12 5.44772 11.5523 5 11 5H2C1.44772 5 1 5.44772 1 6V18C1 18.5523 1.44771 19 2 19Z"
      stroke="#8393B7"
      stroke-width="2"
    />
  </Svg>
);
