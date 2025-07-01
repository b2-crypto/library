import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';
const Xvc = (props) => (<Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#B50126" cx={24} cy={24} r={24}/>
      <Path fill="#FFF" d="M15.177 16.114H12L14.496 12h6.201v16.076L32.571 12H39L22.285 36h-7.108z"/>
    </G>
  </Svg>);
export default Xvc;
Xvc.color = '#B50126';
