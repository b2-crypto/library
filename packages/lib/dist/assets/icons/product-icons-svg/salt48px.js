import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';
const Salt = (props) => (<Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#1BEEF4" cx={24} cy={24} r={24}/>
      <Path d="m24.75 15.668 8.705 18.32h-17.41l8.705-18.32Zm0-8.168-14.25 30H39l-14.25-30Z" fill="#FFF"/>
    </G>
  </Svg>);
export default Salt;
Salt.color = '#1BEEF4';
