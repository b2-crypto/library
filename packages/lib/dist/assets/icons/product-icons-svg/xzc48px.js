import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';
const Xzc = (props) => (<Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#23B852" cx={24} cy={24} r={24}/>
      <Path d="M28.088 28.722h5.084v4.446H17.897L36.859 14.19a2.202 2.202 0 0 0 .48-2.36 2.18 2.18 0 0 0-2.015-1.33H12.676a2.161 2.161 0 0 0-2.176 2.177v16.045l9.412-9.42h-5.084v-4.47H30.08L11.141 33.81a2.202 2.202 0 0 0-.48 2.36 2.18 2.18 0 0 0 2.015 1.33h22.648c1.191 0 2.176-.963 2.176-2.177V19.3l-9.412 9.42Z" fill="#FFF"/>
    </G>
  </Svg>);
export default Xzc;
Xzc.color = '#23B852';
