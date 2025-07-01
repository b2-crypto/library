import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';
const Tnc = (props) => (<Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#FF439B" cx={24} cy={24} r={24}/>
      <Path d="m27.338 20.706 8.45 14.544h-23.42l2.807-4.655 12.617.004-3.198-5.221 2.744-4.672Zm-8.625 3.384 8.592-14.279L39 29.5h-5.615l-6.181-10.741-3.002 5.332h-5.489Zm7.328 5.428L9 29.438 20.71 9.75l2.791 4.72-6.455 10.377h6.25l2.745 4.67Z" fill="#FFF"/>
    </G>
  </Svg>);
export default Tnc;
Tnc.color = '#FF439B';
