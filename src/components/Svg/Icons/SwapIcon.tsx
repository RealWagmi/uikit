
import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
<Svg viewBox="0 0 10 20" {...props}>
    
<path d="M5 19L1 15M5 19V1V19ZM5 19L9 15L5 19Z" stroke="#C2A676" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
);

export default Icon;
