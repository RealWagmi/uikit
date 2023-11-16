import { FC, ReactElement, PropsWithChildren } from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Token: FC<PropsWithChildren<SvgProps>> = (props): ReactElement => (
  <Svg viewBox="0 0 32 32" {...props} fill="none" stroke="none">
    <g clipPath="url(#clip0_2855_61247)">
      <circle cx="16" cy="16" r="16" fill="url(#paint0_radial_2855_61247)"/>
      <circle cx="16" cy="16" r="15.5" stroke="white" strokeOpacity="0.2"/>
      <path d="M15.2983 23.0488V9.14166H16.8128V23.0488H15.2983Z" fill="white"/>
      <path d="M23.0077 13.7752L18.3307 15.0155L17.2877 10.1614L18.6784 9.84712L19.2267 12.1472C19.2267 12.1472 20.4903 10.0745 18.8054 7.9282C17.8125 6.82499 17.3412 6.77819 16.2279 6.60435C15.2484 6.46394 12.9718 6.7949 12.2931 9.45264C12.0056 11.1643 12.3299 12.4313 14.5363 14.0895L14.4126 15.9349C14.4126 15.9349 11.9488 14.1998 11.3136 12.9829C10.8222 12.0201 9.97973 10.1179 11.5008 7.4702C12.3199 6.14635 13.9346 4.87598 16.7795 5.0097C18.2104 5.06988 21.7039 6.8183 21.1623 10.9035C21.0687 11.6691 20.6709 12.6887 20.6709 12.6887L22.5898 12.2608L23.0077 13.7752Z" fill="white"/>
      <path d="M20.3363 24.6568C19.4805 25.9573 17.8324 27.1842 14.9941 26.9769C13.5633 26.88 10.1199 25.0379 10.7685 20.9694C10.8821 20.2072 11.3067 19.2009 11.3067 19.2009L9.37777 19.5754L9 18.0543L13.7104 16.9377L14.6264 21.8186L13.2256 22.096L12.7376 19.7793C12.7376 19.7793 11.4204 21.8152 13.0451 24.0083C14.0079 25.1382 14.4759 25.1951 15.5892 25.399C16.562 25.5662 18.8487 25.292 19.5975 22.6543C19.9285 20.9527 19.6376 19.6757 17.478 17.9573L17.6519 16.1153C17.6519 16.1153 20.0689 17.9139 20.6707 19.1475C21.132 20.127 21.9243 22.0526 20.3363 24.6568Z" fill="white"/>
    </g>
    <defs>
      <radialGradient id="paint0_radial_2855_61247" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(16 16) rotate(90) scale(16)">
        <stop offset="0.65625" stopColor="#2D76F2"/>
        <stop offset="1" stopColor="#7FADFC"/>
      </radialGradient>
      <clipPath id="clip0_2855_61247">
        <rect width="32" height="32" rx="10" fill="white"/>
      </clipPath>
    </defs>
  </Svg>
);

export default Token;