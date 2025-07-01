import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
const Lkk = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#9D01EB" cx={24} cy={24} r={24} />
      <Path
        d="M15.008 39v-5.483L24 24.358l8.964 9.159V39L24 29.842 15.008 39ZM7.5 20.45h12.703L24 24.358H11.297L7.5 20.45Zm33 0-3.797 3.908H24V7.5l3.797 3.88v9.07H40.5Z"
        fill="#FFF"
      />
    </G>
  </Svg>
);
export default Lkk;
Lkk.color = '#9D01EB';
