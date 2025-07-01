import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
const Icn = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#4C6F8C" cx={24} cy={24} r={24} />
      <Path
        d="M31.25 10.5h4v27h-4v-27ZM24.583 24h4v13.5h-4V24Zm-6.666-6.75h4V37.5h-4V17.25Zm-6.667 13.5h4v6.75h-4v-6.75Z"
        fill="#FFF"
      />
    </G>
  </Svg>
);
export default Icn;
Icn.color = '#4C6F8C';
