import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';
const Ark = (props) => (<Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#F70000" cx={24} cy={24} r={24}/>
      <Path d="M23.92 20.02 7.5 37.336 23.994 10.5l16.506 27-16.58-17.48Zm2.383 6.879h-5.134l2.64-2.905 2.494 2.929v-.024Zm-9.9 4.765v-.037l2.911-2.98v-.013l8.88-.038 2.997 3.068H16.404Z" fill="#FFF"/>
    </G>
  </Svg>);
export default Ark;
Ark.color = '#F70000';
