import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
  <Svg viewBox="0 0 20 20" {...props} fill="none">
    <path d="M5 15L15 5M15 5H6.875M15 5V13.125" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

export default Icon;
