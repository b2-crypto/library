import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';
const Emc = (props) => (<Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#B49FFC" cx={24} cy={24} r={24}/>
      <Path fill="#FFF" d="M12 12v4.8h9.6v4.8H12v4.8h14.4v-9.6h4.8v14.4H12V36h24V12z"/>
    </G>
  </Svg>);
export default Emc;
Emc.color = '#B49FFC';
