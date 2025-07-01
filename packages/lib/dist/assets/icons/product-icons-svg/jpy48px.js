import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';
const Jpy = (props) => (<Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#EAC749" cx={24} cy={24} r={24}/>
      <Path fill="#FFF" d="M26.322 28.067v2.817h7.595v3.431h-7.595v3.935h-4.644v-3.934h-7.595v-3.433h7.595v-2.816h-7.595v-3.433h6.257L11.25 11.25h5.628l7.2 11.301 7.201-11.301h5.471l-9.129 13.384h6.296v3.433z"/>
    </G>
  </Svg>);
export default Jpy;
Jpy.color = '#EAC749';
