import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
const Ppc = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#3CB054" cx={24} cy={24} r={24} />
      <Path
        d="M13.5 11.25c18.14.67 25.134 11.558 21.623 21.275-.995 2.703-2.052 4.183-4.276 5.725.091-.39.184-.781.255-1.18 1.315-7.58-1.177-16.701-13.367-21.74 9.698 5.773 13.612 16.043 9.09 22.672-7.699 1.21-13.325-5.364-13.325-12.939V11.25Z"
        fill="#FFF"
      />
    </G>
  </Svg>
);
export default Ppc;
Ppc.color = '#3CB054';
