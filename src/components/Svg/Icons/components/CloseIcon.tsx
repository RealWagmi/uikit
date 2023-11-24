import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
  <Svg viewBox="0 0 20 21" {...props} fill="none">
    <path d="M18 18.5L2 2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 2.5L2 18.5" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

export default Icon;
