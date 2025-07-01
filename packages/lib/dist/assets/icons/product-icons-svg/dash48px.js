import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';
const Dash = (props) => (<Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#1C75BC" cx={24} cy={24} r={24}/>
      <Path d="M39.857 19.457 36.8 29.03S34.914 33.8 30.429 33.8H8.8l1.543-4.771H29.943l3.086-9.572H13.457l1.514-4.771h21.515c4.714 0 3.371 4.771 3.371 4.771ZM9.571 22.03h11.6l-1.485 4.428H8.057l1.514-4.428Z" fill="#FFF"/>
    </G>
  </Svg>);
export default Dash;
Dash.color = '#1C75BC';
