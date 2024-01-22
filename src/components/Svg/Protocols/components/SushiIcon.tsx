import { FC, ReactElement, PropsWithChildren, memo } from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";
import { v4 as uuid } from "uuid";

const Item: FC<PropsWithChildren<SvgProps>> = (props): ReactElement => {
  const clipId01 = uuid();
  const clipId02 = uuid();
  const clipId03 = uuid();

  const gradId01 = uuid();

  const gradId02 = uuid();

  return (
    <Svg viewBox="0 0 18 18" {...props} fill="none" stroke="none">
      <g clipPath={`url(#${clipId01})`}>
        <g clipPath={`url(#${clipId02})`}>
          <circle cx="8.89" cy="8.89" r="8.89" fill={`url(#${gradId01})`} />
          <circle cx="8.89" cy="8.89" r="8.39" stroke="white" strokeOpacity="0.2" />
          <g clipPath={`url(#${clipId03})`}>
            <path
              d="M13.832 10.252L11.908 13.092L11.892 13.08C11.2 14.008 8.96803 13.624 6.86003 12.132C4.76403 10.652 3.55603 8.768 4.15603 7.752L4.14003 7.74L6.06403 4.944C6.73203 3.984 8.98803 4.356 11.116 5.864C13.288 7.284 14.46 9.288 13.832 10.252Z"
              fill={`url(#${gradId02})`}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.5401 10.0881C12.9521 10.9241 10.9081 10.5041 8.94413 9.12807C6.94013 7.74807 5.76813 5.99607 6.35213 5.16007C6.93613 4.32407 8.98413 4.74407 10.9481 6.12007C12.9081 7.50007 14.0801 9.25207 13.5401 10.0881ZM11.7001 8.83207C11.4081 9.24807 10.4041 9.04407 9.40013 8.37207C8.44013 7.70407 7.85613 6.82807 8.14813 6.41207C8.44013 5.99607 9.44413 6.20007 10.4481 6.87207C11.4081 7.54007 11.9921 8.41607 11.7001 8.83207Z"
              fill="white"
            />
          </g>
        </g>
      </g>
      <defs>
        <radialGradient
          id={gradId01}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(8.89 8.89) rotate(90) scale(8.89)"
        >
          <stop stopColor="#FFDBEC" />
          <stop offset="1" stopColor="#8089C9" />
        </radialGradient>
        <linearGradient
          id={gradId02}
          x1="7.98543"
          y1="6.43386"
          x2="10.0254"
          y2="11.5619"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29AFE5" />
          <stop offset="0.3608" stopColor="#9181C3" />
          <stop offset="1" stopColor="#FA52A0" />
        </linearGradient>
        <clipPath id={clipId01}>
          <rect x="0.109863" y="0.109863" width="17.78" height="17.78" rx="8.89" fill="white" />
        </clipPath>
        <clipPath id={clipId02}>
          <rect width="17.78" height="17.78" rx="8.89" fill="white" />
        </clipPath>
        <clipPath id={clipId03}>
          <rect width="10" height="10" fill="white" transform="translate(4 4)" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default memo(Item);
