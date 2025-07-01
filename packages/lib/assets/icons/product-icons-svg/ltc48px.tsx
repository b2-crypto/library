import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
const Ltc = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#CBC6C6" cx={24} cy={24} r={24} />
      <Path
        fill="#FFF"
        d="m15.64 28.821-2.14.831 1.032-4.139 2.166-.87L19.82 12h7.693l-2.279 9.294 2.115-.857-1.02 4.125-2.14.857-1.272 5.224H34.5L33.19 36H13.878z"
      />
    </G>
  </Svg>
);
export default Ltc;
Ltc.color = '#CBC6C6';
