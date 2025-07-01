import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';
const Taas = (props) => (<Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#002342" cx={24} cy={24} r={24}/>
      <Path d="M6 19.5h1.947v1.831H6V19.5Zm1.947 7.16h5.666v1.84H6v-5.337h5.716v1.831H7.947v1.667Zm26.44-3.497H42V28.5h-5.716v-1.84h3.769v-1.666h-5.666v-1.831Zm5.698-1.743h-5.7v-1.832h5.7v1.832Zm-24.617 1.743h7.613v3.576h-1.897V28.5h-5.716v-5.337Zm5.666 3.498v-1.667h-3.719v1.667h3.719ZM15.468 19.5h7.613v1.831h-7.613V19.5Zm9.501 3.663h7.613v3.576h-1.897V28.5H24.97v-5.337Zm5.658 3.498v-1.667h-3.719v1.667h3.719ZM24.969 19.5h7.613v1.831H24.97V19.5Z" fill="#FFF"/>
    </G>
  </Svg>);
export default Taas;
Taas.color = '#002342';
