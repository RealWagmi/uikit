import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
  <Svg viewBox="0 0 12 12" {...props} fill="none">
    <path d="M5.25 9L3.75 10.5L2.25 9" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.75 3L8.25 1.5L9.75 3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.25 10.5V1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3.75 1.5V10.5" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

export default Icon;
