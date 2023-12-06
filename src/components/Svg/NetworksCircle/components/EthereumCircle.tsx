import { FC, ReactElement, PropsWithChildren, memo } from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Item: FC<PropsWithChildren<SvgProps>> = (props): ReactElement => (
  <Svg viewBox="0 0 16 16" {...props} fill="none" stroke="none">
    <g clipPath="url(#clip0_6492_45528)">
      <circle cx="8" cy="8" r="8" fill="url(#paint0_radial_6492_45528)" />
      <circle cx="8" cy="8" r="7.5" stroke="white" strokeOpacity="0.2" />
      <path
        opacity="0.7"
        d="M7.99921 6.6391L4.5625 8.2021L7.99921 10.2325L11.4346 8.2021L7.99921 6.6391Z"
        fill="white"
      />
      <path opacity="0.5" d="M4.5625 8.20219L7.99921 10.2326V2.5L4.5625 8.20219Z" fill="white" />
      <path opacity="0.8" d="M7.99951 2.5V10.2326L11.4349 8.20219L7.99951 2.5Z" fill="white" />
      <path opacity="0.5" d="M4.5625 8.85345L7.99921 13.6951V10.8839L4.5625 8.85345Z" fill="white" />
      <path opacity="0.8" d="M7.99951 10.8839V13.6951L11.4376 8.85345L7.99951 10.8839Z" fill="white" />
    </g>
    <defs>
      <radialGradient
        id="paint0_radial_6492_45528"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(8 8) rotate(90) scale(8)"
      >
        <stop stopColor="#B2BFE2" />
        <stop offset="1" stopColor="#6474A2" />
      </radialGradient>
      <clipPath id="clip0_6492_45528">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </Svg>
);

export default memo(Item);
