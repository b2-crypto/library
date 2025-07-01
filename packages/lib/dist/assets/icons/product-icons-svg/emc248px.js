import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';
const Emc2 = (props) => (<Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#0CF" cx={24} cy={24} r={24}/>
      <G fill="#FFF">
        <Path d="M11.84 28.741h6.597l-2.84 5.759H9l2.84-5.759Zm3.76-7.619h6.596l-2.833 5.743h-6.597l2.833-5.743Zm3.758-7.62h6.597l-2.833 5.743h-6.597l2.833-5.743Z" fillOpacity={0.4}/>
        <Path d="M18.415 28.74h6.597l-2.84 5.758h-6.597l2.84-5.759Zm3.759-7.62h6.597l-2.833 5.742H19.34l2.833-5.742Zm3.759-7.62h6.596l-2.833 5.743H23.1l2.833-5.743Z" fillOpacity={0.6}/>
        <Path d="M24.886 28.74h6.597l-2.84 5.758h-6.598l2.84-5.759Zm3.759-7.62h6.596l-2.833 5.742h-6.596l2.833-5.742Zm3.758-7.62H39l-2.833 5.743H29.57l2.833-5.743Z"/>
      </G>
    </G>
  </Svg>);
export default Emc2;
Emc2.color = '#0CF';
