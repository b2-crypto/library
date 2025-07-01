import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';
const Zec = (props) => (<Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#ECB244" cx={24} cy={24} r={24}/>
      <Path d="M22.644 29.77h9.446v5.025h-5.813c.097 1.436.145 2.77.242 4.205h-4.893v-4.154h-5.813c0-1.64-.193-3.282.097-4.82.145-.82 1.017-1.539 1.55-2.257a693.205 693.205 0 0 1 5.571-6.872c.727-.871 1.453-1.692 2.277-2.666h-9.059v-5.026h5.377V9h4.7v4.103h5.86c0 1.692.194 3.333-.096 4.871-.145.82-1.017 1.539-1.599 2.257a693.21 693.21 0 0 1-5.57 6.872c-.727.923-1.454 1.743-2.277 2.666Z" fill="#FFF"/>
    </G>
  </Svg>);
export default Zec;
Zec.color = '#ECB244';
