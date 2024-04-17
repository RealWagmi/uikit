import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
  <Svg viewBox="0 0 24 24" {...props} fill="none">
    <path d="M10 2H14" strokeLinecap="round" />
    <path d="M12 4V2" strokeLinecap="round" />
    <path d="M11 9V13C11 13.5523 11.4477 14 12 14H15" strokeLinecap="round" />
    <circle cx="12" cy="13" r="8.5" />
  </Svg>
);

export default Icon;
