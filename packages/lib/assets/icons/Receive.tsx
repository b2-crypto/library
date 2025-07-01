import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export const Receive = (props: SvgProps) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 2C7.333 2.125 2 2.125 2 2v4a1 1 0 002 0V4h12v2a1 1 0 002 0c-.116-2.667-.116-4 0-4zm-8 4a1 1 0 00-1 1v2H7a1 1 0 000 2h2v2a1 1 0 002 0v-2h2a1 1 0 000-2h-2V7a1 1 0 00-1-1zm6 8a1 1 0 012 0v4c0-.125-5.333-.125-16 0 .116 0 .116-1.333 0-4a1 1 0 012 0v2h12v-2z"
      fill={props.color || '#8393B7'}
    />
  </Svg>
);
