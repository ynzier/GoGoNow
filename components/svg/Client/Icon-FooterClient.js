import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
const IconHome = ({current}) => {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M19.463 8.699l-.002-.001L11.302.54A1.829 1.829 0 0010 0a1.83 1.83 0 00-1.302.54L.543 8.692l-.008.009a1.843 1.843 0 00.003 2.6 1.83 1.83 0 001.279.54h.325v6.003c0 1.188.967 2.155 2.155 2.155H7.49a.586.586 0 00.586-.586v-4.707c0-.542.442-.983.984-.983h1.883c.542 0 .983.44.983.983v4.707c0 .324.262.586.586.586h3.192a2.157 2.157 0 002.155-2.155v-6.004h.302a1.83 1.83 0 001.302-.539 1.844 1.844 0 000-2.603z"
        fill={current ? '#18A0FB' : '#C3C3C3'}
      />
    </Svg>
  );
};
const IconHistory = ({current}) => {
  return (
    <Svg
      width={30}
      height={28}
      viewBox="0 0 30 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <G clipPath="url(#prefix__clip0)">
        <Path
          d="M22 20.329V8.859h-4.557C16.566 8.86 16 8.286 16 7.394V3H8.791c-.472 0-.924.19-1.259.526a1.825 1.825 0 00-.529 1.27V21.204c.004.477.194.934.528 1.27.335.337.786.526 1.257.527h11.399c.472 0 .924-.189 1.259-.525.334-.337.525-.794.528-1.272v-.032c.012-.078.02-.158.022-.237.007-.202.004-.404.004-.605zM9.962 7.099l1.018-.002c.02-.004.04-.01.06-.018 0-.374-.006-.756 0-1.137.007-.459.449-.737.836-.532.213.113.314.3.315.541V7.1c.399 0 .781-.006 1.163 0 .153 0 .3.062.408.171a.588.588 0 010 .826.572.572 0 01-.408.17c-.262.009-.525 0-.788 0h-.376v.622c0 .182.004.364 0 .546a.592.592 0 01-.163.417.576.576 0 01-.406.18c-.322.002-.576-.255-.58-.6-.005-.377 0-.754 0-1.158H9.96c-.39 0-.651-.238-.651-.586 0-.35.263-.585.652-.586v-.003zm2.94 12.307h-2.71c-.356 0-.614-.251-.613-.586 0-.334.257-.582.616-.584H12.906c.36 0 .617.245.626.576.008.332-.264.594-.63.594zm6.244-3.49a.55.55 0 01-.541.364c-.353.006-.705.001-1.057.001h-7.262c-.083.004-.167 0-.249-.014a.576.576 0 01-.35-.232.59.59 0 01.094-.783.572.572 0 01.394-.141c1.262-.003 2.523-.003 3.785 0h4.611c.45 0 .741.407.575.806zm0-3.124a.563.563 0 01-.542.364c-.377.005-.756 0-1.133 0h-7.186a1.16 1.16 0 01-.248-.014.576.576 0 01-.35-.232.59.59 0 01.094-.784.572.572 0 01.394-.14c1.288-.003 2.575-.003 3.862 0h4.534c.451 0 .741.407.575.806z"
          fill={current ? '#18A0FB' : '#C3C3C3'}
        />
        <Path
          d="M13.922 7.678a.588.588 0 01-.162.415.573.573 0 01-.403.178h-1.164v.621c0 .182.004.365 0 .547a.592.592 0 01-.166.416.576.576 0 01-.407.176c-.322.003-.575-.254-.58-.6-.005-.376 0-.753 0-1.157H9.96c-.389 0-.651-.238-.651-.586 0-.35.263-.584.652-.586L10.98 7.1c.02-.004.04-.01.059-.018 0-.374-.005-.755 0-1.137.007-.458.449-.737.837-.531.213.113.313.299.314.54v1.15c.4 0 .782-.007 1.164 0a.57.57 0 01.4.17.586.586 0 01.168.405z"
          fill={current ? '#18A0FB' : '#C3C3C3'}
        />
        <Path
          d="M7 9.418v.885-2.131 1.246zM21.998 7.688h-4.191a.647.647 0 01-.447-.18.664.664 0 01-.204-.441V6.42 3l4.842 4.688z"
          fill={current ? '#18A0FB' : '#C3C3C3'}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path
            fill={current ? '#18A0FB' : '#C3C3C3'}
            transform="translate(7 3)"
            d="M0 0h15v20H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
const IconGogonow = ({current}) => {
  return (
    <Svg
      width={30}
      height={28}
      viewBox="0 0 30 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M21.537 3.728A2.699 2.699 0 0019.672 3c-.758 0-1.524.3-2.095.871l-.246.245-.245-.246A2.976 2.976 0 0014.991 3a2.7 2.7 0 00-1.865.728 2.785 2.785 0 00-.062 3.999l4.267 4.267L21.6 7.727a2.785 2.785 0 00-.062-4zM25.726 14.167c-.656-.444-1.429-.318-2.113.077-.684.395-4.614 3.754-4.614 3.754L15.131 18c-.18 0-.374-.202-.374-.381 0-.211.183-.375.374-.375h2.367c.828 0 1.755-.54 1.755-1.5 0-1.019-.927-1.498-1.755-1.498-1.437 0-1.717.006-1.717.006-.575 0-1.16-.035-1.61-.276a4.437 4.437 0 00-2.027-.48c-1.239 0-2.347.493-3.108 1.272C7.42 17.178 6.54 17.97 5 18.74l4.497 4.498 1.5-1.5h7.59c.756 0 1.486-.277 2.05-.778l5.14-5.766c.314-.279.296-.792-.051-1.028z"
        fill={current ? '#18A0FB' : '#C3C3C3'}
      />
    </Svg>
  );
};
const IconChat = ({current}) => {
  return (
    <Svg
      width={30}
      height={28}
      viewBox="0 0 30 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M25.315 10.02h-.657v7.224c0 1.125-.655 2.142-1.968 2.142H9.825v.344c0 .994 1.132 1.998 2.293 1.998h9.836l3.763 2.213-.546-2.213h.144c1.161 0 1.685-1.001 1.685-1.998v-7.995c0-.995-.524-1.715-1.685-1.715z"
        fill={current ? '#18A0FB' : '#C3C3C3'}
      />
      <Path
        d="M20.77 5H5.828C4.513 5 3 6.168 3 7.294v9.055c0 1.037 1.282 1.785 2.511 1.9l-.8 3.038 5.128-3.016h10.93c1.315 0 2.528-.797 2.528-1.922V7.293C23.297 6.169 22.083 5 20.77 5zM8.107 12.644a1.35 1.35 0 110-2.7 1.35 1.35 0 010 2.7zm5.042 0a1.35 1.35 0 110-2.7 1.35 1.35 0 010 2.7zm5.042 0a1.35 1.35 0 110-2.7 1.35 1.35 0 010 2.7z"
        fill={current ? '#18A0FB' : '#C3C3C3'}
      />
    </Svg>
  );
};
const IconProfile = ({current}) => {
  return (
    <Svg
      width={16}
      height={21}
      viewBox="0 0 16 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M8 9.067A4.533 4.533 0 108 0a4.533 4.533 0 000 9.067zM8 10.133a8 8 0 00-8 8c0 1.178.955 2.134 2.133 2.134h11.734A2.133 2.133 0 0016 18.133a8 8 0 00-8-8z"
        fill={current ? '#18A0FB' : '#C3C3C3'}
      />
    </Svg>
  );
};

export {IconHome, IconHistory, IconGogonow, IconChat, IconProfile};