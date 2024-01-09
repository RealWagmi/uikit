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
        d="M4.5468 7.96859L4.55256 10.084L6.35 11.1417V12.3801L3.50064 10.709V7.35L4.5468 7.96859ZM4.5468 5.85321V7.0859L3.5 6.46667V5.23398L4.5468 4.61475L5.59872 5.23398L4.5468 5.85321ZM7.10064 5.23398L8.14744 4.61475L9.19936 5.23398L8.14744 5.85321L7.10064 5.23398Z"
        fill="white"
      />
      <path
        d="M5.30322 9.64552V8.40705L6.35002 9.02628V10.259L5.30322 9.64552ZM7.10066 11.5853L8.14745 12.2045L9.19938 11.5853V12.818L8.14745 13.4372L7.10066 12.818V11.5853ZM10.7007 5.23398L11.7475 4.61475L12.7994 5.23398V6.46667L11.7475 7.0859V5.85321L10.7007 5.23398ZM11.7475 10.084L11.7532 7.96859L12.8 7.34936V10.7083L9.95066 12.3795V11.141L11.7475 10.084Z"
        fill="white"
      />
      <path d="M10.997 9.6455L9.9502 10.259V9.02627L10.997 8.40704V9.6455Z" fill="white" />
      <path
        d="M10.9968 6.29167L11.0026 7.53013L9.20002 8.58782V10.7083L8.15322 11.3218L7.10643 10.7083V8.58782L5.30386 7.53013V6.29167L6.35515 5.67244L8.14681 6.73526L9.94938 5.67244L11.0013 6.29167H10.9968ZM5.30322 4.17692L8.14745 2.5L10.9968 4.17692L9.95002 4.79615L8.14745 3.73333L6.35002 4.79615L5.30322 4.17692Z"
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
          <stop stopColor="#FFE184" />
          <stop offset="1" stopColor="#F0B90B" />
        </radialGradient>
      </defs>
    </Svg>
  );
};

export default memo(Item);
