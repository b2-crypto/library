import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
const Ven = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#15BDFF" cx={24} cy={24} r={24} />
      <Path
        d="M22.108 37.102 10.559 13.569a.57.57 0 0 1 .51-.819h4.002c.215 0 .417.12.51.309l8.433 17.072c.752 1.53 2.928 1.53 3.68 0L36.1 13.072a.573.573 0 0 1 .51-.309h.497c.295 0 .483.31.349.565l-11.67 23.774c-.751 1.53-2.926 1.53-3.678 0Z"
        fill="#FFF"
      />
    </G>
  </Svg>
);
export default Ven;
Ven.color = '#15BDFF';
