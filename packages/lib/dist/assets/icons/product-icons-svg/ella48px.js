import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';
const Ella = (props) => (<Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#396A28" cx={24} cy={24} r={24}/>
      <Path d="M27.109 19.818 24 16.71l-3.13 3.13-3.246-3.245L24 7.5l6.42 9.008-3.311 3.31Zm-7.324 1.107L16.709 24l3.11 3.109-3.235 3.234L7.5 24l8.985-6.375 3.3 3.3Zm8.376 6.205L31.29 24l-3.097-3.096 3.338-3.338L40.5 24l-9.067 6.403-3.272-3.273Zm-7.257 1.064L24 31.291l3.075-3.076 3.274 3.274L24 40.5l-6.306-9.097 3.21-3.209ZM24 18.792 29.208 24 24 29.208 18.792 24 24 18.792Z" fill="#FFF"/>
    </G>
  </Svg>);
export default Ella;
Ella.color = '#396A28';
