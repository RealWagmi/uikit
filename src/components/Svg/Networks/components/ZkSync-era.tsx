import { FC, ReactElement, PropsWithChildren, memo } from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Item: FC<PropsWithChildren<SvgProps>> = (props): ReactElement => (
  <Svg viewBox="0 0 32 32" {...props} fill="none" stroke="none">
    <g clipPath="url(#clip0_5187_99005)">
      <rect width="32" height="32" rx="6" fill="url(#paint0_radial_5187_99005)"/>
      <rect x="0.5" y="0.5" width="31" height="31" rx="5.5" stroke="white" strokeOpacity="0.2"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M29 16.087L21.9082 9.00262V14.1909L14.8667 19.3855L21.9082 19.3904V23.1713L29 16.087Z" fill="#4E529A"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M4 16.0843L11.0918 23.1687V18.0353L18.0817 12.8373L11.0918 12.8325V9L4 16.0843Z" fill="#8C8DFC"/>
    </g>
    <defs>
      <radialGradient id="paint0_radial_5187_99005" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(16 16) rotate(90) scale(16)">
        <stop stopColor="#101431"/>
        <stop offset="1" stopColor="#0E1122"/>
      </radialGradient>
      <clipPath id="clip0_5187_99005">
        <rect width="32" height="32" fill="white"/>
      </clipPath>
    </defs>
  </Svg>
);

export default memo(Item);