import { FC, ReactElement, PropsWithChildren, memo } from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Token: FC<PropsWithChildren<SvgProps>> = (props): ReactElement => (
  <Svg viewBox="0 0 32 32" {...props} fill="none" stroke="none">
    <g clipPath="url(#clip0_2855_61183)">
      <path d="M16 32C24.8363 32 32 24.8363 32 16C32 7.16373 24.8363 0 16 0C7.16373 0 0 7.16373 0 16C0 24.8363 7.16373 32 16 32Z" fill="url(#paint0_linear_2855_61183)"/>
      <path d="M16.0001 15.9945L8.42676 9.49335V14.3858L16.0001 20.887L23.5734 14.3858V9.49335L16.0001 15.9945Z" fill="white"/>
      <path d="M16.0003 13.0704L20.1652 9.49335H11.8354L16.0003 13.0704Z" fill="white"/>
      <path d="M23.5737 17.5542L17.8203 22.4946H23.5737V17.5542Z" fill="white"/>
      <path d="M14.1801 22.4957L8.42676 17.5553V22.4957H14.1801Z" fill="white"/>
    </g>
    <defs>
      <linearGradient id="paint0_linear_2855_61183" x1="0" y1="16" x2="32" y2="16" gradientUnits="userSpaceOnUse">
        <stop stopColor="#DDC194"/>
        <stop offset="0.99" stopColor="#C2A676"/>
      </linearGradient>
      <clipPath id="clip0_2855_61183">
        <rect width="32" height="32" fill="white"/>
      </clipPath>
    </defs>
  </Svg>
);

export default memo(Token);