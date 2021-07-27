import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg
      width={400}
      height={150}
      viewBox="0 0 400 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 12.8v128.151s83.5 20.36 200 0c116.5-20.359 200 0 200 0V6.031a6.433 6.433 0 00-.56-1.663 8.001 8.001 0 00-3.496-3.496C394.233 0 391.993 0 387.512 0H12.8C8.32 0 6.08 0 4.368.872A8 8 0 00.872 4.368C0 6.08 0 8.32 0 12.8z"
        fill="#00A1FF"
      />
    </Svg>
  );
}

export default SvgComponent;
