import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export const Send = (props: SvgProps) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.742 5.548l13.14-3.514a1 1 0 011.257 1.018l-.705 13.583a1 1 0 01-1.628.725l-3.109-2.517a1 1 0 111.259-1.554l1.582 1.281.532-10.249-9.914 2.652 1.582 1.281c.43.348.496.977.148 1.406a.998.998 0 01-1.406.148L2.371 7.291a1 1 0 01.371-1.743zm8.216 2.263a1 1 0 111.554 1.258l-2.518 3.11a1 1 0 01-1.554-1.26l2.518-3.108z"
      fill={props.color || '#8393B7'}
    />
  </Svg>
);
