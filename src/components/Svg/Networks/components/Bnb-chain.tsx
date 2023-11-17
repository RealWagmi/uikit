import { FC, ReactElement, PropsWithChildren, memo } from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Item: FC<PropsWithChildren<SvgProps>> = (props): ReactElement => (
  <Svg viewBox="0 0 32 32" {...props} fill="none" stroke="none">
    <g clipPath="url(#clip0_5149_102609)">
      <rect width="32" height="32" rx="6" fill="url(#paint0_radial_5149_102609)"/>
      <rect x="0.5" y="0.5" width="31" height="31" rx="5.5" stroke="white" strokeOpacity="0.2"/>
      <path d="M8.79379 16L8.80532 20.2308L12.4002 22.3461V24.8231L6.70148 21.4808V14.7628L8.79379 16ZM8.79379 11.7692V14.2346L6.7002 12.9961V10.5308L8.79379 9.2923L10.8976 10.5308L8.79379 11.7692ZM13.9015 10.5308L15.9951 9.2923L18.0989 10.5308L15.9951 11.7692L13.9015 10.5308Z" fill="white"/>
      <path d="M10.3066 19.3538V16.8769L12.4002 18.1154V20.5808L10.3066 19.3538ZM13.9015 23.2333L15.9951 24.4718L18.0989 23.2333V25.6987L15.9951 26.9372L13.9015 25.6987V23.2333ZM21.1015 10.5308L23.1951 9.2923L25.2989 10.5308V12.9961L23.1951 14.2346V11.7692L21.1015 10.5308ZM23.1951 20.2308L23.2066 16L25.3002 14.7615V21.4795L19.6015 24.8218V22.3449L23.1951 20.2308Z" fill="white"/>
      <path d="M21.6937 19.3538L19.6001 20.5807V18.1154L21.6937 16.8769V19.3538Z" fill="white"/>
      <path d="M21.6938 12.6461L21.7054 15.1231L18.1002 17.2384V21.4795L16.0066 22.7064L13.913 21.4795V17.2384L10.3079 15.1231V12.6461L12.4105 11.4077L15.9938 13.5333L19.5989 11.4077L21.7028 12.6461H21.6938ZM10.3066 8.41665L15.9951 5.06281L21.6938 8.41665L19.6002 9.65511L15.9951 7.52947L12.4002 9.65511L10.3066 8.41665Z" fill="white"/>
    </g>
    <defs>
      <radialGradient id="paint0_radial_5149_102609" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(16 16) rotate(90) scale(16)">
        <stop stopColor="#FFE184"/>
        <stop offset="1" stopColor="#F0B90B"/>
      </radialGradient>
      <clipPath id="clip0_5149_102609">
        <rect width="32" height="32" fill="white"/>
      </clipPath>
    </defs>
  </Svg>
);

Item.displayName = 'BNB Chain';

export default memo(Item);