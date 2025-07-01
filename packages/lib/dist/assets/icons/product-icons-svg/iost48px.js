import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';
const Iost = (props) => (<Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#1C1C1C" cx={24} cy={24} r={24}/>
      <Path d="M36.75 16.5v15L24 39l-12.75-7.5v-15L24 9l12.75 7.5Zm-13.153 8.111-1.185.7 2.215 1.293 1.177-.695 3.148 1.852-4.696 2.762-9.743-5.68-.039 2.764 9.788 5.686 9.404-5.532-5.51-3.241 1.11-.656-2.214-1.293-1.102.65-1.546-.91 1.353-.799-2.214-1.293-1.346.795-2.631-1.548 4.696-2.762 6.491 3.793 2.378-1.407-8.874-5.156-9.407 5.532 4.995 2.938-.942.556 2.214 1.293.934-.552 1.546.91Z" fill="#FFF"/>
    </G>
  </Svg>);
export default Iost;
Iost.color = '#1C1C1C';
