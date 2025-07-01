import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';
const Xvg = (props) => (<Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#00CBFF" cx={24} cy={24} r={24}/>
      <Path d="M14.416 15.503 12 10.5h24l-2.388 5.003H36L23.927 40.5 12 15.503h2.416Zm0 0 9.656 19.994 9.54-19.994H14.416Z" fill="#FFF"/>
      <Path fill="#FFF" opacity={0.504} d="M24 36.75 12 10.5h23.998z"/>
    </G>
  </Svg>);
export default Xvg;
Xvg.color = '#00CBFF';
