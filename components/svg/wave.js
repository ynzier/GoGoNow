import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const HomeJobWave = () => {
  return (
    <Svg
      width={228}
      height={98}
      viewBox="0 0 228 98"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 12.8v78.719s47.558 13.219 113.911 0c66.353-13.22 113.911 0 113.911 0V6.868c-.124-1.002-.335-1.796-.694-2.5a8.001 8.001 0 00-3.496-3.496C221.92 0 219.68 0 215.2 0H12.8C8.32 0 6.08 0 4.368.872A8 8 0 00.872 4.368C0 6.08 0 8.32 0 12.8z"
        fill="#00A1FF"
      />
    </Svg>
  );
};

const MyJobWave = () => {
  return (
    <Svg
      width={400}
      height={98}
      viewBox="0 0 400 98"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 12.8v78.719s83.5 13.219 200 0c116.5-13.22 200 0 200 0V6.03a6.395 6.395 0 00-.56-1.663 8.001 8.001 0 00-3.496-3.496C394.233 0 391.993 0 387.512 0H12.8C8.32 0 6.08 0 4.368.872A8 8 0 00.872 4.368C0 6.08 0 8.32 0 12.8z"
        fill="#00A1FF"
      />
    </Svg>
  );
};

const HistoryWave = () => {
  return (
    <Svg
      width={370}
      height={170}
      viewBox="0 0 370 170"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 12.8v146.686s77.237 23.037 185 0c107.762-23.037 185 0 185 0V6.15c-.129-.677-.315-1.255-.583-1.782a8.001 8.001 0 00-3.496-3.496C364.209 0 361.969 0 357.489 0H12.8C8.32 0 6.08 0 4.368.872A8 8 0 00.872 4.368C0 6.08 0 8.32 0 12.8z"
        fill="#00A1FF"
      />
    </Svg>
  );
};
export { HomeJobWave, MyJobWave, HistoryWave };
