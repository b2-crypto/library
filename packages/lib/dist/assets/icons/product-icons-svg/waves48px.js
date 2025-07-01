import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';
const Waves = (props) => (<Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#0155FF" cx={24} cy={24} r={24}/>
      <Path fill="#FFF" d="m24 9 15 15-15 15L9 24z"/>
    </G>
  </Svg>);
export default Waves;
Waves.color = '#0155FF';
