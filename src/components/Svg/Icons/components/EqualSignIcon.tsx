import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
  <Svg viewBox="0 0 16 16" {...props} fill="none">
    <path d="M2.5 6H13.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2.5 10H13.5" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

export default Icon;
