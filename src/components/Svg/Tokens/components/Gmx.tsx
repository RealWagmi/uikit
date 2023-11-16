import { FC, ReactElement, PropsWithChildren } from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Token: FC<PropsWithChildren<SvgProps>> = (props): ReactElement => (
  <Svg viewBox="0 0 32 32" {...props} fill="none" stroke="none">
    <g clipPath="url(#clip0_2855_61274)">
      <circle cx="16" cy="16" r="16" fill="url(#paint0_radial_2855_61274)"/>
      <circle cx="16" cy="16" r="15.5" stroke="white" strokeOpacity="0.2"/>
      <path d="M26.8081 23.6067L15.9209 7.75L5 23.6067H20.2162L15.9221 17.5568L13.7924 20.7009H11.5271L15.9221 14.3785L22.2775 23.6061L26.8081 23.6067Z" fill="url(#paint1_linear_2855_61274)"/>
    </g>
    <defs>
      <radialGradient id="paint0_radial_2855_61274" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(16 16) rotate(90) scale(16)">
        <stop stopColor="#536DCB"/>
        <stop offset="1" stopColor="#00C2FF"/>
      </radialGradient>
      <linearGradient id="paint1_linear_2855_61274" x1="16.6892" y1="8.16227" x2="9.91773" y2="25.44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#03D1CF" stopOpacity="0.988"/>
        <stop offset="1" stopColor="#4E09F8"/>
      </linearGradient>
      <clipPath id="clip0_2855_61274">
        <rect width="32" height="32" rx="10" fill="white"/>
      </clipPath>
    </defs>
  </Svg>
);

export default Token;