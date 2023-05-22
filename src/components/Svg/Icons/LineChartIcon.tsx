
import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
<Svg viewBox="0 0 20 16" {...props}>
    
    <path
        d="M19 15.5H1V0.5M17.5002 2L10.0002 9.5L7.00019 6.5L1.00019 12.5M17.5002 2V5.75M17.5002 2H13.7502"
        stroke="#9B947A"
        strokeLinecap="round"
        strokeLinejoin="round"
    />
</Svg>
);

export default Icon;
