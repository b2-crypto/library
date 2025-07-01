import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const ArrowUnionIcon = (props: SvgProps) => (
  <Svg width="6" height="11" viewBox="0 0 6 11" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 4L3 0L0 4H6ZM6 7L3 10.5556L0 7H6Z"
      fill={props.color || '#393F62'}
    />
  </Svg>
);
