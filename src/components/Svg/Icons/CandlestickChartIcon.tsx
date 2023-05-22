
import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
<Svg viewBox="0 0 24 24" {...props}>
    
<rect x="14.4" y="7.2" width="6" height="9.6" rx="1" stroke="#9B947A" strokeLinecap="round" strokeLinejoin="round"/>
<line x1="17.3" y1="17.3" x2="17.3" y2="19.9" stroke="#9B947A" strokeLinecap="round" strokeLinejoin="round"/>
<line x1="17.3" y1="4.1" x2="17.3" y2="6.7" stroke="#9B947A" strokeLinecap="round" strokeLinejoin="round"/>
<rect x="3.59998" y="3.6" width="8.4" height="16.8" rx="1" stroke="#9B947A" strokeLinecap="round" strokeLinejoin="round"/>
<line x1="7.69995" y1="20.9" x2="7.69995" y2="23.5" stroke="#9B947A" strokeLinecap="round" strokeLinejoin="round"/>
<line x1="7.69995" y1="0.5" x2="7.69995" y2="3.1" stroke="#9B947A" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
);

export default Icon;
