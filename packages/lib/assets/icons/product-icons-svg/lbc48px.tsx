import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
const Lbc = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#006149" cx={24} cy={24} r={24} />
      <Path
        fill="#FFF"
        d="m36.264 25.777-1.196-.3.364-1.455 3.728.932-.932 3.728-1.456-.364.323-1.292-13.308 8.238L9.029 27.89v-5.627l15.336-9.591 14.062 6.86v2.316l-14.638 9.094-10.871-5.39.666-1.343 10.123 5.018 13.22-8.213v-.545l-12.472-6.084-13.926 8.71v3.868l13.18 6.586z"
      />
    </G>
  </Svg>
);
export default Lbc;
Lbc.color = '#006149';
