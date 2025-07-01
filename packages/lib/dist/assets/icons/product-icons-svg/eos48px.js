import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';
const Eos = (props) => (<Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle fill="#000" fillRule="nonzero" cx={24} cy={24} r={24}/>
      <Path stroke="#FFF" strokeLinecap="round" strokeLinejoin="round" d="M16.329 17.415 24 41.501 12.618 34.37l3.711-16.955L24 6.936v7.35L12.618 34.37h22.774L24.01 14.286v-7.35l7.67 10.479 3.712 16.955L24.01 41.5l7.67-24.085"/>
    </G>
  </Svg>);
export default Eos;
Eos.color = '#000';
