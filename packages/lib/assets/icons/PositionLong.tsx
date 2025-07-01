import React from 'react';
import Svg, { Path, Rect, SvgProps } from 'react-native-svg';

export const PositionLong = (props: SvgProps) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      d="M1.5 15.5H7L17 4"
      stroke="#00C938"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <Rect y="9" width="2" height="2" fill="#00C938" />
    <Rect x="3.2" y="9" width="2" height="2" fill="#00C938" />
    <Rect x="15" y="9" width="2" height="2" fill="#00C938" />
    <Rect x="6.5" y="9" width="2" height="2" fill="#00C938" />
    <Rect x="18" y="9" width="2" height="2" fill="#00C938" />
  </Svg>
);
