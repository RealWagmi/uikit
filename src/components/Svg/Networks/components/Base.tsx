import { FC, ReactElement, PropsWithChildren, memo } from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";
import { v4 as uuid } from "uuid";

const Item: FC<PropsWithChildren<SvgProps>> = (props): ReactElement => {
    const id = uuid();
    const id1 = uuid();
    const id2 = uuid();
    return (
        <Svg viewBox="0 0 32 32" {...props} fill="none" stroke="none">
            <g clipPath={`url(#${id1})`}>
                <rect width="32" height="32" rx="6" fill={`url(#${id})`}/>
                <rect x="0.5" y="0.5" width="31" height="31" rx="5.5" stroke="white" strokeOpacity="0.2"/>
                <g clipPath={`url(#${id2})`}>
                    <path d="M15.8957 25.8259C21.38 25.8259 25.8259 21.3877 25.8259 15.913C25.8259 10.4382 21.38 6 15.8957 6C10.6925 6 6.42393 9.99485 6 15.0797H19.1255V16.7462H6C6.42393 21.8311 10.6925 25.8259 15.8957 25.8259Z" fill="white"/>
                </g>
            </g>
            <defs>
                <radialGradient id={id} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(16 16) rotate(90) scale(16)">
                    <stop offset="0.255" stopColor="#2C6EFF"/>
                    <stop offset="1" stopColor="#032AFF"/>
                </radialGradient>
                <clipPath id={id1}>
                    <rect width="32" height="32" fill="white"/>
                </clipPath>
                <clipPath id={id2}>
                    <rect width="20" height="20" fill="white" transform="translate(6 6)"/>
                </clipPath>
            </defs>
        </Svg>
    );
};

export default memo(Item);
