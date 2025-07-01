import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';
const Xdn = (props) => (<Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#4F7AA2" cx={24} cy={24} r={24}/>
      <Path d="M19.964 18h4.107c1.983 0 5.523 1.204 5.523 6s-3.54 6-5.523 6h-4.107V18Zm2.266 9.57h1.7c1.415 0 3.115-.867 3.115-3.57s-1.7-3.57-3.116-3.57h-1.7v7.14ZM31.152 18h.85l7.648 10.538V18h.85v12h-.85l-7.648-10.308V30h-.85V18ZM7.5 18h2.833v3H7.5v-3Zm4.249 0h2.833v3h-2.833v-3Zm4.249 0h2.832v3h-2.832v-3Zm0 4.5h2.832v3h-2.832v-3Zm0 4.5h2.832v3h-2.832v-3Zm-4.25-4.5h2.834v3h-2.833v-3Z" fill="#FFF"/>
    </G>
  </Svg>);
export default Xdn;
Xdn.color = '#4F7AA2';
