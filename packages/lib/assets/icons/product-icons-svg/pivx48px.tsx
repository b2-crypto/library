import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
const Pivx = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#5E4778" cx={24} cy={24} r={24} />
      <Path
        d="M15.75 18.362h9.23v1.882h-9.23v-1.882Zm18 .885c0 4.46-3.166 7.341-7.542 7.341h-6.063V36h-2.4V24.46h8.138c3.262 0 5.392-1.938 5.392-5.213 0-3.238-2.13-5.12-5.354-5.12h-2.533l-6.064.019V12h8.865c4.394 0 7.56 2.786 7.56 7.247h.001Z"
        stroke="#FFF"
        strokeWidth={1.5}
        fill="#FFF"
      />
    </G>
  </Svg>
);
export default Pivx;
Pivx.color = '#5E4778';
