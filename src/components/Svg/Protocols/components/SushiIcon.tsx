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
    <Svg viewBox="0 0 24 24" {...props} fill="none" stroke="none">
      <g clipPath={`url(#${clipId01})`}>
        <g clipPath={`url(#${clipId02})`}>
          <circle cx="11.8516" cy="11.8518" r="12" fill={`url(#${gradId01})`} />
          <circle cx="11.8516" cy="11.8518" r="11.5" stroke="white" strokeOpacity="0.2" />
          <g clipPath={`url(#${clipId03})`}>
            <path
              d="M18.7648 13.7531L16.0712 17.7291L16.0488 17.7123C15.08 19.0115 11.9552 18.4739 9.00401 16.3851C6.06961 14.3131 4.37842 11.6755 5.21841 10.2531L5.19601 10.2363L7.88961 6.3219C8.82481 4.9779 11.9832 5.4987 14.9624 7.60989C18.0032 9.59789 19.644 12.4035 18.7648 13.7531Z"
              fill={`url(#${gradId02})`}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.356 13.5234C17.5328 14.6938 14.6712 14.1058 11.9216 12.1794C9.11603 10.2474 7.47523 7.79459 8.29283 6.62419C9.11043 5.45379 11.9776 6.04179 14.7272 7.96819C17.4712 9.90019 19.112 12.353 18.356 13.5234ZM15.78 11.765C15.3712 12.3474 13.9656 12.0618 12.56 11.121C11.216 10.1858 10.3984 8.95939 10.8072 8.37699C11.216 7.79459 12.6216 8.08019 14.0272 9.02099C15.3712 9.95618 16.1888 11.1826 15.78 11.765Z"
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
          gradientTransform="translate(11.8516 11.8518) rotate(90) scale(12)"
        >
          <stop stopColor="#FFDBEC" />
          <stop offset="1" stopColor="#8089C9" />
        </radialGradient>
        <linearGradient
          id={gradId02}
          x1="10.5796"
          y1="8.40769"
          x2="13.4356"
          y2="15.5869"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29AFE5" />
          <stop offset="0.3608" stopColor="#9181C3" />
          <stop offset="1" stopColor="#FA52A0" />
        </linearGradient>
        <clipPath id={clipId01}>
          <rect width="24" height="24" rx="12" fill="white" />
        </clipPath>
        <clipPath id={clipId02}>
          <rect x="-0.148438" y="-0.148193" width="24" height="24" rx="10" fill="white" />
        </clipPath>
        <clipPath id={clipId03}>
          <rect width="14" height="14" fill="white" transform="translate(5 5.00024)" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default memo(Item);
