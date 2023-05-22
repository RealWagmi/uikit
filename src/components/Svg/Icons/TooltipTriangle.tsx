
import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
<Svg viewBox="0 0 12 7" {...props}>
    
<path d="M4.4 1.13333C5.2 0.0666671 6.8 0.0666668 7.6 1.13333L12 7H0L4.4 1.13333Z" fill="#0D0E0E"/>
</Svg>
);

export default Icon;
