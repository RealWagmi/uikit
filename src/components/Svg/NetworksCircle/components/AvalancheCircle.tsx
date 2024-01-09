import { FC, ReactElement, PropsWithChildren, memo } from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";
import { v4 as uuid } from "uuid";

const Item: FC<PropsWithChildren<SvgProps>> = (props): ReactElement => {
  const clipId = uuid();
  const gradId = uuid();
  return (
    <Svg viewBox="0 0 16 16" {...props} fill="none" stroke="none">
      <circle cx="8" cy="8" r="8" fill={`url(#${gradId})`} />
      <circle cx="8" cy="8" r="7.5" stroke="white" strokeOpacity="0.2" />
      <g clipPath={`url(#${clipId})`}>
        <path
          d="M10.2405 9.01618C10.4606 8.63609 10.8157 8.63609 11.0357 9.01618L12.4061 11.4218C12.6261 11.8019 12.4461 12.1119 12.006 12.1119H9.24531C8.8102 12.1119 8.63015 11.8019 8.84521 11.4218L10.2405 9.01618ZM7.5899 4.38505C7.80995 4.00495 8.16004 4.00495 8.38009 4.38505L8.68517 4.93518L9.40534 6.20049C9.58039 6.56058 9.58039 6.98568 9.40534 7.34577L6.98975 11.5318C6.7697 11.8719 6.40461 12.0869 5.99951 12.1119H3.99402C3.55391 12.1119 3.37386 11.8069 3.59392 11.4218L7.5899 4.38505Z"
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
          gradientTransform="translate(8 8) rotate(90) scale(8)"
        >
          <stop stopColor="#D74F49" />
          <stop offset="1" stopColor="#E84142" />
        </radialGradient>
        <clipPath id={clipId}>
          <rect width="9" height="9" fill="white" transform="translate(3.5 3.5)" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default memo(Item);
