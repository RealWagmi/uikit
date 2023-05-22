
import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
<Svg viewBox="0 0 17 16" {...props}>
    
<path d="M10.1 14.4V3.59998C10.1 2.49541 9.20462 1.59998 8.10005 1.59998H3.30005C2.19548 1.59998 1.30005 2.49541 1.30005 3.59998V14.4" stroke="#BCBAAC" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.90002 4.19995C2.90002 3.64767 3.34774 3.19995 3.90002 3.19995H7.50003C8.05231 3.19995 8.50002 3.64767 8.50002 4.19995V6.19995C8.50002 6.75224 8.05231 7.19995 7.50002 7.19995H3.90002C3.34774 7.19995 2.90002 6.75224 2.90002 6.19995V4.19995Z" stroke="#BCBAAC" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.1 8.4C12.5 8.4 12.1 9.76 12.1 10.4C12.1 11.04 12.1 12 12.1 12C12.1 12 12.1 13.6 13.9 13.6C15.7 13.6 15.7 12 15.7 12V7.2M15.3 5.2L12.9 2" stroke="#BCBAAC"/>
<circle cx="14.8999" cy="6.40005" r="1.1" stroke="#BCBAAC"/>
<path d="M0.5 14.7999H16.5" stroke="#BCBAAC" strokeLinecap="round"/>
</Svg>
);

export default Icon;
