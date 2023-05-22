
import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
<Svg viewBox="0 0 20 6" {...props}>
    
<path d="M16.6291 0.790291L18.8388 3M18.8388 3L16.6291 5.20971M18.8388 3H12.6516M3.37084 5.20971L1.16113 3M1.16113 3L3.37084 0.790291M1.16113 3H7.34832" stroke="#BCBAAC" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
);

export default Icon;
