import { FC, ReactElement, PropsWithChildren, memo } from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";
import { v4 as uuid } from "uuid";

const Item: FC<PropsWithChildren<SvgProps>> = (props): ReactElement => {
  const id = uuid();
  return (
    <Svg viewBox="0 0 16 16" {...props} fill="none" stroke="none">
      <circle cx="8" cy="8" r="8" fill={`url(#${id})`} />
      <circle cx="8" cy="8" r="7.5" stroke="white" strokeOpacity="0.2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.5002 8.04345L10.9543 4.50128V7.09543L7.43359 9.69271L10.9543 9.69516V11.5856L14.5002 8.04345Z"
        fill="#4E529A"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 8.04216L5.5459 11.5843V9.01765L9.04085 6.41864L5.5459 6.41624V4.5L2 8.04216Z"
        fill="#8C8DFC"
      />
      <defs>
        <radialGradient
          id={id}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(8 8) rotate(90) scale(8)"
        >
          <stop stopColor="#101431" />
          <stop offset="1" stopColor="#0E1122" />
        </radialGradient>
      </defs>
    </Svg>
  );
};

export default memo(Item);
