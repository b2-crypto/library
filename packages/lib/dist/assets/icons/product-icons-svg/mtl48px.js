import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';
const Mtl = (props) => (<Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#1E1F25" cx={24} cy={24} r={24}/>
      <Path d="M12 13.5h1.5v21H12v-21Zm7.5 4.5H21v13.5h-1.5V18Zm7.5 3h1.5v7.5H27V21Zm7.5-7.5H36v21h-1.5v-21Z" fill="#FFF"/>
    </G>
  </Svg>);
export default Mtl;
Mtl.color = '#1E1F25';
