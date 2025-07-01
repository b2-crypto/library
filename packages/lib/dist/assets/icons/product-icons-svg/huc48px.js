import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';
const Huc = (props) => (<Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#FFC018" cx={24} cy={24} r={24}/>
      <Path fill="#FFF" d="M17.25 21.75h13.5V15h4.5v24h-4.5V26.25h-13.5V33h-4.5V9h4.5z"/>
    </G>
  </Svg>);
export default Huc;
Huc.color = '#FFC018';
