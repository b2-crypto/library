import * as React from 'react';
import Svg, { Defs, Circle, G, Mask, Use, Path, } from 'react-native-svg';
const Dcn = (props) => (<Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <Defs>
      <Circle id="dcn-48px_svg__a" cx={24} cy={24} r={24}/>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Circle cx={24} cy={24} r={24} fill="#136485" fillRule="nonzero"/>
      <Mask id="dcn-48px_svg__b" fill="#fff">
        <Use xlinkHref="#dcn-48px_svg__a"/>
      </Mask>
      <Path d="M31.72 48a6729.447 6729.447 0 0 0-7.878-23.898l-.23-.004c-1.765 4.96-4.45 12.521-8.055 22.685L20.276 48H6l.935-6.276c.209-.344.5-.87.534-.923 3.582-5.66 6.799-11.516 9.221-17.774 2.57-6.639 4.626-13.451 6.587-20.292.175-.61.383-1.21.575-1.815.206.238.282.458.345.682 1.23 4.388 2.42 8.789 3.695 13.164 2.325 7.97 5.594 15.53 9.926 22.615.546.893 1.506 2.433 2.878 4.619l.182-.316L41.25 48h-9.53ZM23.928.073 24 0l.113.073h-.186Z" fill="#FFF" fillRule="nonzero" mask="url(#dcn-48px_svg__b)"/>
    </G>
  </Svg>);
export default Dcn;
Dcn.color = '#136485';
