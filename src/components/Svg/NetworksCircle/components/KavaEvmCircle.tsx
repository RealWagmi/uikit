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
      <path d="M4.5 4H5.89807V11.8127H4.5V4Z" fill="white" />
      <path
        d="M9.44672 4.08224L6.55076 7.85747L6.65394 7.98954L6.65208 7.99192L9.53564 11.7916H11.2319L11.2691 11.7631L8.29292 7.88332L11.1868 4.11077L11.1497 4.08224H9.44672Z"
        fill="white"
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
          <stop stopColor="#FC4C45" />
          <stop offset="1" stopColor="#E84142" />
        </radialGradient>
      </defs>
    </Svg>
  );
};

export default memo(Item);
