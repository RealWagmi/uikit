
import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
<Svg viewBox="0 0 86 40" {...props}>
    
<g clipPath="url(#clip0_1002_12994)">
<rect width="85.4851" height="40" fill="url(#pattern0)"/>
</g>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_1002_12994" transform="matrix(0.000436491 0 0 0.000932836 -0.279354 -0.409515)"/>
</pattern>
<clipPath id="clip0_1002_12994">
<rect width="85.4851" height="40" fill="white"/>
</clipPath>
</defs>
</Svg>
);

export default Icon;