import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';
const Mkr = (props) => (<Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#1ABC9C" cx={24} cy={24} r={24}/>
      <Path d="M11.757 18.084V33.75H9v-21l14.562 10.54v10.46h-2.757v-9.116l-9.048-6.55Zm15.438 6.55v9.116h-2.757V23.29L39 12.75v21h-2.757V18.084l-9.048 6.55Z" fill="#FFF"/>
    </G>
  </Svg>);
export default Mkr;
Mkr.color = '#1ABC9C';
