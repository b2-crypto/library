import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';
const Eth = (props) => (<Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#627EEA" cx={24} cy={24} r={24}/>
      <G fill="#FFF">
        <Path fillOpacity={0.602} d="M24.747 6v13.305l11.245 5.025z"/>
        <Path d="M24.747 6 13.5 24.33l11.247-5.025z"/>
        <Path fillOpacity={0.602} d="M24.747 32.952v9.04L36 26.425z"/>
        <Path d="M24.747 41.992v-9.041L13.5 26.424z"/>
        <Path fillOpacity={0.2} d="m24.747 30.86 11.245-6.53-11.245-5.022z"/>
        <Path fillOpacity={0.602} d="m13.5 24.33 11.247 6.53V19.308z"/>
      </G>
    </G>
  </Svg>);
export default Eth;
Eth.color = '#627EEA';
