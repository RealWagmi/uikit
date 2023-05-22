
import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
<Svg viewBox="0 0 16 16" {...props}>
    
<circle cx="8" cy="8" r="8" strokeWidth="3" fill="#98A1C0"></circle>
</Svg>
);

export default Icon;
