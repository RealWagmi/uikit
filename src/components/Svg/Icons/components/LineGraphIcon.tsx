import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
  <Svg viewBox="0 0 25 24" {...props} fill="none">
    <path
      d="M21.2 19.5H4.19995C3.64767 19.5 3.19995 19.0523 3.19995 18.5V4.5M21.2001 9L15.8102 13.7162C15.4546 14.0274 14.9297 14.0472 14.5517 13.7636L9.84861 10.2364C9.47059 9.95284 8.94572 9.97262 8.59011 10.2838L3.20014 15"
      strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

export default Icon;
