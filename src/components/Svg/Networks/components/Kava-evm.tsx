import { FC, ReactElement, PropsWithChildren, memo } from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";
import { v4 as uuid } from "uuid";

const Item: FC<PropsWithChildren<SvgProps>> = (props): ReactElement => {
  const clipId = uuid();
  const gradId = uuid();
  return (
    <Svg viewBox="0 0 32 32" {...props} fill="none" stroke="none">
      <g clipPath={`url(#${clipId})`}>
        <rect width="32" height="32" rx="6" fill={`url(#${gradId})`} />
        <rect x="0.5" y="0.5" width="31" height="31" rx="5.5" stroke="white" strokeOpacity="0.2" />
        <path d="M8.6001 6.39996H12.0001V25.4H8.6001V6.39996Z" fill="white" />
        <path
          d="M20.6302 6.59996L13.5874 15.7811L13.8383 16.1023L13.8338 16.108L20.8464 25.3485H24.9716L25.062 25.2792L17.8242 15.8439L24.862 6.66936L24.7716 6.59996H20.6302Z"
          fill="white"
        />
      </g>
      <defs>
        <radialGradient
          id={gradId}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(16 16) rotate(90) scale(16)"
        >
          <stop stopColor="#F93D35" />
          <stop offset="1" stopColor="#FF564F" />
        </radialGradient>
        <clipPath id={clipId}>
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default memo(Item);
