
import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
<Svg viewBox="0 0 16 16" {...props}>
    
<path d="M13.5 8H2.5" stroke="#7B8187" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 3.5L2.5 8L7 12.5" stroke="#7B8187" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
);

export default Icon;
