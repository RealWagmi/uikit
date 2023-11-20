import { FC, ReactElement, PropsWithChildren, memo } from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Token: FC<PropsWithChildren<SvgProps>> = (props): ReactElement => (
  <Svg viewBox="0 0 32 32" {...props} fill="none" stroke="none">
    <g clipPath="url(#clip0_2855_61167)">
      <circle cx="16" cy="16" r="16" fill="url(#paint0_radial_2855_61167)"/>
      <circle cx="16" cy="16" r="15.5" stroke="white" strokeOpacity="0.2"/>
      <path opacity="0.7" d="M15.9984 13.2783L9.125 16.4043L15.9984 20.4651L22.8691 16.4043L15.9984 13.2783Z" fill="white"/>
      <path opacity="0.5" d="M9.125 16.4044L15.9984 20.4652V5L9.125 16.4044Z" fill="white"/>
      <path opacity="0.8" d="M15.999 5V20.4652L22.8697 16.4044L15.999 5Z" fill="white"/>
      <path opacity="0.5" d="M9.125 17.7068L15.9984 27.3902V21.7677L9.125 17.7068Z" fill="white"/>
      <path opacity="0.8" d="M15.999 21.7677V27.3902L22.8752 17.7068L15.999 21.7677Z" fill="white"/>
    </g>
    <defs>
      <radialGradient id="paint0_radial_2855_61167" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(16 16) rotate(90) scale(16)">
        <stop stopColor="#B2BFE2"/>
        <stop offset="1" stopColor="#6474A2"/>
      </radialGradient>
      <clipPath id="clip0_2855_61167">
        <rect width="32" height="32" fill="white"/>
      </clipPath>
    </defs>
  </Svg>
);

export default memo(Token);