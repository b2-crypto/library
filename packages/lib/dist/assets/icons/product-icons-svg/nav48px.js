import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';
const Nav = (props) => (<Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#7D59B5" cx={24} cy={24} r={24}/>
      <Path fill="#FFF" d="M31.981 33h-7.195l-5.697-10.507L14.695 33H7.5l7.526-18h7.196l5.917 10.914L33.305 15H40.5z"/>
    </G>
  </Svg>);
export default Nav;
Nav.color = '#7D59B5';
