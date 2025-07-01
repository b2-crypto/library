import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
const Mnx = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#00ADEF" cx={24} cy={24} r={24} />
      <Path
        d="M22.294 40.479C13.98 39.607 7.5 32.562 7.5 24S13.98 8.393 22.294 7.521v5.055c-5.542.84-9.79 5.635-9.79 11.424s4.248 10.583 9.79 11.424v5.055ZM25.558 7.5c7.843.718 14.103 6.925 14.92 14.756h-5.043c-.764-5.058-4.8-9.04-9.877-9.711V7.5ZM40.5 25.526c-.723 7.933-7.026 14.25-14.942 14.974v-5.045c5.15-.68 9.228-4.768 9.908-9.929H40.5Z"
        fill="#FFF"
      />
    </G>
  </Svg>
);
export default Mnx;
Mnx.color = '#00ADEF';
