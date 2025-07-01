import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';
const Dcr = (props) => (<Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#2ED6A1" cx={24} cy={24} r={24}/>
      <Path d="M22.284 26.429h6.63c2.467 0 4.467-2.012 4.467-4.493 0-2.481-2-4.493-4.467-4.493h-2.11l-4.52-3.943h6.63c4.012 0 7.462 2.858 8.233 6.817.77 3.96-1.354 7.914-5.07 9.436l5.228 4.562h-5.986l-9.035-7.886Zm3.236-5.04h-6.63c-2.467 0-4.468 2.011-4.468 4.493 0 2.48 2 4.492 4.468 4.492H21l4.518 3.944H18.89c-4.012-.001-7.462-2.858-8.233-6.817-.77-3.96 1.354-7.914 5.069-9.436L10.503 13.5h5.987l9.03 7.889Z" fill="#FFF"/>
    </G>
  </Svg>);
export default Dcr;
Dcr.color = '#2ED6A1';
