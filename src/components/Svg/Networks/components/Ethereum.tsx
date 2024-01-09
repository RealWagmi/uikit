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
        <path
          opacity="0.7"
          d="M15.9984 13.2783L9.125 16.4043L15.9984 20.4651L22.8691 16.4043L15.9984 13.2783Z"
          fill="white"
        />
        <path opacity="0.5" d="M9.125 16.4044L15.9984 20.4652V5L9.125 16.4044Z" fill="white" />
        <path opacity="0.8" d="M15.999 5V20.4652L22.8697 16.4044L15.999 5Z" fill="white" />
        <path opacity="0.5" d="M9.125 17.7068L15.9984 27.3902V21.7677L9.125 17.7068Z" fill="white" />
        <path opacity="0.8" d="M15.999 21.7677V27.3902L22.8752 17.7068L15.999 21.7677Z" fill="white" />
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
          <stop stopColor="#B2BFE2" />
          <stop offset="1" stopColor="#6474A2" />
        </radialGradient>
        <clipPath id={clipId}>
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default memo(Item);
