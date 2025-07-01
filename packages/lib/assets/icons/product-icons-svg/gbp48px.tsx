import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
const Gbp = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#BC3FE0" cx={24} cy={24} r={24} />
      <Path
        d="M16.63 22.223v-3.498c0-5.514 3.328-8.975 9.113-8.975 4.399 0 6.855 1.863 8.757 4.26l-3.725 2.851c-1.426-1.749-2.773-2.776-4.992-2.776-2.655 0-4.24 1.826-4.24 4.754v3.384h9.866v3.955h-9.866v6.503h12.878v4.069H13.5v-2.966l3.13-.913v-6.693H13.5v-3.955h3.13Z"
        fill="#FFF"
      />
    </G>
  </Svg>
);
export default Gbp;
Gbp.color = '#BC3FE0';
