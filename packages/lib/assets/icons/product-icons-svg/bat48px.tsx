import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
const Bat = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#FF5000" cx={24} cy={24} r={24} />
      <Path
        d="m9 35.25 15.077-25.5L39 35.215 9 35.25Zm15.041-15.18-6.163 10.18h12.354l-6.19-10.18Z"
        fill="#FFF"
      />
    </G>
  </Svg>
);
export default Bat;
Bat.color = '#FF5000';
