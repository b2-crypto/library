import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const Search = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 12A5 5 0 1 0 7 2a5 5 0 0 0 0 10Zm0 2A7 7 0 1 0 7 0a7 7 0 0 0 0 14Z"
      fill="#8393B7"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.793 11.293a1 1 0 0 1 1.414 0l5.5 5.5a1 1 0 0 1-1.414 1.414l-6.5-6.5c.61.61.61-.024 1-.414Z"
      fill="#8393B7"
    />
  </Svg>
);
