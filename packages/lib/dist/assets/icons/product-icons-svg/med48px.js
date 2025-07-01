import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';
const Med = (props) => (<Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#00B0FF" cx={24} cy={24} r={24}/>
      <Path d="M23.761 24.008 10.5 16.503l.004 15.003 4.418 2.501v-9.986l8.84 5.003V24.02h-.003l.003-.002v-.01Zm7.544-10.739L27.4 15.477l-3.638-2.039-3.647 2.062-3.907-2.228L23.77 9l7.535 4.27ZM24 24.34l13.5-7.654-.003 15.3L33 34.537V24.353l-9 5.102v-5.103h.003L24 24.35v-.01Zm-.568 10.092 3.534-2.125L30.75 34.6 23.423 39l-7.297-4.396 3.783-2.274 3.523 2.1Z" fill="#FFF"/>
    </G>
  </Svg>);
export default Med;
Med.color = '#00B0FF';
