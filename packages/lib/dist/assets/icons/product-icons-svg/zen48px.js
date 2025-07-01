import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';
const Zen = (props) => (<Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#F88900" cx={24} cy={24} r={24}/>
      <Path fill="#FFF" d="M9.75 27v-6l5.165-3.064L19.887 21l5.163-3.064V12l5.1-3 5.1 3v6l-5.1 3v5.936L35.25 30v5.935L30.15 39l-5.101-3.009L25.05 30l-5.037-3.064L14.914 30z"/>
    </G>
  </Svg>);
export default Zen;
Zen.color = '#F88900';
