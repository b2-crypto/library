import * as React from 'react';
import Svg, { SvgProps, G, Circle } from 'react-native-svg';
const Gbyte = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#302C2C" cx={24} cy={24} r={24} />
      <Circle fill="#FFF" cx={24} cy={24} r={16.5} />
    </G>
  </Svg>
);
export default Gbyte;
Gbyte.color = '#302C2C';
