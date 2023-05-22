
import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
<Svg viewBox="0 0 12 7" {...props}>
    
    <path d="M0.97168 1L6.20532 6L11.439 1" stroke="#AEAEAE"/>
</Svg>
);

export default Icon;
