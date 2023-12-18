import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
  <Svg viewBox="0 0 24 24" {...props} fill="none">
    <path d="M3.75 12H20.25" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5px" />
  </Svg>
);

export default Icon;
