import { FC, ReactElement, PropsWithChildren, memo } from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";
import { v4 as uuid } from "uuid";

const Token: FC<PropsWithChildren<SvgProps>> = (props): ReactElement => {
  const clipId = uuid();
  const gradId = uuid();
  return (
    <Svg viewBox="0 0 32 32" {...props} fill="none" stroke="none">
      <g clipPath={`url(#${clipId})`}>
        <circle cx="16" cy="16" r="16" fill={`url(#${gradId})`} />
        <circle cx="16" cy="16" r="15.5" stroke="white" strokeOpacity="0.2" />
        <path
          d="M11.7245 14.2448L16.0006 9.96995L20.2768 14.2448L22.7625 11.7598L16.0006 5L9.23877 11.7598L11.7245 14.2448Z"
          fill="white"
        />
        <path d="M7.48322 13.518L5 16.0005L7.48322 18.483L9.96644 16.0005L7.48322 13.518Z" fill="white" />
        <path
          d="M11.7245 17.7552L16.0006 22.03L20.2768 17.7552L22.7625 20.2402L16.0006 27L9.23877 20.2402L11.7245 17.7552Z"
          fill="white"
        />
        <path d="M24.5174 13.5185L22.0342 16.001L24.5174 18.4834L27.0006 16.001L24.5174 13.5185Z" fill="white" />
        <path
          d="M18.521 16.0001L16.0005 13.4803L14.1405 15.3397L13.9145 15.5483L13.48 16.0001L16.0005 18.5198L18.521 16.0001Z"
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
          <stop stopColor="#FFDE98" />
          <stop offset="1" stopColor="#F6BF48" />
        </radialGradient>
        <clipPath id={clipId}>
          <rect width="32" height="32" rx="10" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default memo(Token);
