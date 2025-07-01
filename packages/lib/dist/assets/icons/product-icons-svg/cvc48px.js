import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';
const Cvc = (props) => (<Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#3AB03E" cx={24} cy={24} r={24}/>
      <Path d="M25.742 25.168a3.512 3.512 0 0 0 1.996-3.16c0-1.941-1.594-3.514-3.558-3.514-1.964 0-3.558 1.573-3.558 3.514a3.51 3.51 0 0 0 1.998 3.16v4.34h3.122v-4.34M24.18 35.25c-6.278 0-11.385-5.046-11.385-11.25s5.108-11.25 11.385-11.25c5.124 0 9.466 3.36 10.89 7.968h3.925C37.48 14.013 31.423 9 24.18 9 15.797 9 9 15.716 9 24c0 8.284 6.797 15 15.18 15 7.243 0 13.3-5.013 14.815-11.718h-3.924c-1.426 4.608-5.767 7.968-10.89 7.968" fill="#FFF"/>
    </G>
  </Svg>);
export default Cvc;
Cvc.color = '#3AB03E';
