import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
  <Svg viewBox="0 0 24 24" {...props} fill="none">
    <path d="M16.8002 16.8L7.2002 7.19995" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16.8002 7.19995L7.2002 16.8" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

export default Icon;
