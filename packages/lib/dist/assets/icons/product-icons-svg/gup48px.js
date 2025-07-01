import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';
const Gup = (props) => (<Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#37DCD8" cx={24} cy={24} r={24}/>
      <Path d="m23.984 19.018-4.175-4.205A48.86 48.86 0 0 1 24 9a48.696 48.696 0 0 1 4.185 5.788l-4.2 4.23Zm8.578 4.216c1.18 3.303 2.908 6.605 1.26 9.777a11.254 11.254 0 0 1-4.668 4.701c-5.428 2.88-12.148.765-15.008-4.7-1.664-3.173.275-6.736 1.454-10.038 1.084-2.434 2.178-4.678 3.42-6.835l4.964 5 4.993-5.027c1.312 2.27 2.447 4.608 3.585 7.122Z" fill="#FFF"/>
    </G>
  </Svg>);
export default Gup;
Gup.color = '#37DCD8';
