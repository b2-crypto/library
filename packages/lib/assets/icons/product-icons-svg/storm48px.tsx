import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
const Storm = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#080D98" cx={24} cy={24} r={24} />
      <Path
        fill="#FFF"
        d="M34.5 9 16.456 21.375l9.114 5.813L13.5 39l19.953-13.812-8.991-5.813z"
      />
    </G>
  </Svg>
);
export default Storm;
Storm.color = '#080D98';
