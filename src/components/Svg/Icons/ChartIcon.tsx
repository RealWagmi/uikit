
import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
<Svg viewBox="0 0 16 14" {...props}>
    
<path d="M15.5 13.25H1.5C0.947715 13.25 0.5 12.8023 0.5 12.25V0.75M15.5002 4.5L11.1102 8.34122C10.7546 8.65238 10.2297 8.67216 9.85168 8.38865L6.14863 5.61135C5.77061 5.32784 5.24573 5.34762 4.89012 5.65878L0.500156 9.5" stroke="#BCBAAC" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
);

export default Icon;
