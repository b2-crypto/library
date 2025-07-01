import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
const Ardr = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#3C87C7" cx={24} cy={24} r={24} />
      <Path
        d="m23.825 25.785 2.652 3.467L18.75 34.5l5.075-8.715ZM24 9l4.09 6.71L17.183 34.5H9L24 9Zm0 14.763 5.455-4.026L39 34.5h-6.818L24 23.763Z"
        fill="#FFF"
      />
    </G>
  </Svg>
);
export default Ardr;
Ardr.color = '#3C87C7';
