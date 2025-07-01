import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';
const Tkn = (props) => (<Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#24DD7B" cx={24} cy={24} r={24}/>
      <Path d="M19.638 11.87 26.243 9l-.055 7.579H34.5v5.25h-8.367v9.095c0 2.761 4.679 3.086 6.44 2.166l1.597 4.763c-3.909 2.274-14.587 1.733-14.587-6.875V11.87h.055Zm-6.166 11.367c-1.641 0-2.972-1.6-2.972-3.573 0-1.973 1.33-3.572 2.972-3.572s2.973 1.6 2.973 3.572c0 1.974-1.33 3.573-2.973 3.573Z" fill="#FFF"/>
    </G>
  </Svg>);
export default Tkn;
Tkn.color = '#24DD7B';
