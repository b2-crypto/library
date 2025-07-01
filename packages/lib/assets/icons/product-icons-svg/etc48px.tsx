import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
const Etc = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#669073" cx={24} cy={24} r={24} />
      <Path
        d="m13.904 22.13 10.939-4.473 10.602 4.588L24.825 6 13.905 22.13Zm.034 4.964 10.921 6.139L36 27.093 24.96 42 13.938 27.094Zm10.955-7.25 11.073 4.785-11.073 6.008L13.5 24.498l11.393-4.653Z"
        fill="#FFF"
      />
    </G>
  </Svg>
);
export default Etc;
Etc.color = '#669073';
