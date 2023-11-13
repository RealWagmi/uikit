import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
  <Svg viewBox="0 0 16 16" {...props} fill="none">
    <path d="M13 6L8 11L3 6" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

export default Icon;
