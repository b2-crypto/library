import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';
const Bela = (props) => (<Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#13A0F6" cx={24} cy={24} r={24}/>
      <Path d="M12.445 17.352a3.633 3.633 0 0 1-1.945-3.22 3.624 3.624 0 0 1 6.83-1.7 13.336 13.336 0 0 1 6.751-1.824c7.411 0 13.419 6.02 13.419 13.446S31.492 37.5 24.081 37.5c-7.41 0-13.419-6.02-13.419-13.446 0-2.44.65-4.729 1.783-6.702ZM24.081 30.67c3.646 0 6.601-2.962 6.601-6.615s-2.955-6.614-6.6-6.614c-3.647 0-6.602 2.961-6.602 6.614s2.955 6.615 6.601 6.615Z" fill="#FFF"/>
    </G>
  </Svg>);
export default Bela;
Bela.color = '#13A0F6';
