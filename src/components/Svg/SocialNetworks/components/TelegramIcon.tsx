import { FC, ReactElement, PropsWithChildren, memo } from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";
import { v4 as uuid } from "uuid";

const Item: FC<PropsWithChildren<SvgProps>> = (props): ReactElement => {
  const id = uuid();
  return (
    <Svg viewBox="0 0 20 20" {...props} fill="none" stroke="none">
      <g clipPath={`url(#${id})`}>
        <path
          d="M18.3764 1.77434L0.657315 8.64254C-0.0557314 8.96238 -0.296903 9.60289 0.484972 9.95051L5.03067 11.4026L16.0216 4.57484C16.6217 4.14621 17.2361 4.26051 16.7074 4.73203L7.26771 13.3232L6.97118 16.959C7.24583 17.5204 7.74872 17.523 8.0695 17.244L10.6811 14.76L15.154 18.1267C16.1929 18.7449 16.7581 18.346 16.9817 17.2129L19.9154 3.24922C20.22 1.85449 19.7006 1.23996 18.3764 1.77434Z"
          fill="#AFB6C9"
        />
      </g>
      <defs>
        <clipPath id={id}>
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default memo(Item);
