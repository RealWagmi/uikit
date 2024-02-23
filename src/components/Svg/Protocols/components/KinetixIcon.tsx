import { FC, ReactElement, PropsWithChildren, memo } from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";
import { v4 as uuid } from "uuid";

const Item: FC<PropsWithChildren<SvgProps>> = (props): ReactElement => {
  const clipId = uuid();
  const gradId = uuid();
  return (
    <Svg viewBox="0 0 24 24" {...props} fill="none" stroke="none">
      <g clipPath={`url(#${clipId})`}>
        <rect y="24" width="24" height="24" rx="12" transform="rotate(-90 0 24)" fill="white" />
        <path d="M-1.04907e-06 0L0 24L24 24L24 -1.04907e-06L-1.04907e-06 0Z" fill={`url(#${gradId})`} />
        <path
          d="M19.2207 18.8578L15.7437 18.8578C15.5157 18.8578 15.2997 18.7678 15.1377 18.6058L8.83474 12.3028C8.66674 12.1348 8.66674 11.8648 8.83474 11.6968L15.1377 5.39385C15.2997 5.23185 15.5157 5.14185 15.7437 5.14185L19.2207 5.14185C19.4127 5.14185 19.5087 5.37285 19.3737 5.50785L13.0347 11.8468C12.9507 11.9308 12.9507 12.0658 13.0347 12.1498L19.3737 18.4888C19.5087 18.6238 19.4127 18.8548 19.2207 18.8548L19.2207 18.8578Z"
          fill="#FFF7EF"
        />
        <path
          d="M9.23958 8.82309L6.36558 11.6971C6.19758 11.8651 6.19758 12.1351 6.36558 12.3031L9.23958 15.1771C9.40158 15.3391 9.49158 15.5551 9.49158 15.7831L9.49158 18.4291C9.49158 18.6661 9.29958 18.8581 9.06258 18.8581L6.14958 18.8581C5.91258 18.8581 5.72058 18.6661 5.72058 18.4291L5.72058 5.57109C5.72058 5.33409 5.91258 5.14209 6.14958 5.14209L9.06258 5.14209C9.29958 5.14209 9.49158 5.33409 9.49158 5.57109L9.49158 8.21709C9.49158 8.44509 9.40158 8.66109 9.23958 8.82309Z"
          fill="#FFF7EF"
        />
      </g>
      <rect
        x="0.5"
        y="23.5"
        width="23"
        height="23"
        rx="11.5"
        transform="rotate(-90 0.5 23.5)"
        stroke="white"
        strokeOpacity="0.2"
      />
      <defs>
        <linearGradient id={gradId} x1="0.5" y1="15.5" x2="22" y2="5" gradientUnits="userSpaceOnUse">
          <stop offset="0.216777" stopColor="#F73C10" />
          <stop offset="1" stopColor="#F4B071" />
        </linearGradient>
        <clipPath id={clipId}>
          <rect y="24" width="24" height="24" rx="12" transform="rotate(-90 0 24)" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default memo(Item);
