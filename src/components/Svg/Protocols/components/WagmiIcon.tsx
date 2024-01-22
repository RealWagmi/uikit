import { FC, ReactElement, PropsWithChildren, memo } from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";
import { v4 as uuid } from "uuid";

const Item: FC<PropsWithChildren<SvgProps>> = (props): ReactElement => {
  const clipId01 = uuid();
  const clipId02 = uuid();
  const gradId01 = uuid();

  return (
    <Svg viewBox="0 0 18 18" {...props} fill="none" stroke="none">
      <g clipPath={`url(#${clipId01})`}>
        <g clipPath={`url(#${clipId02})`}>
          <path
            d="M8.99986 17.8899C13.9095 17.8899 17.8899 13.9095 17.8899 8.99986C17.8899 4.09021 13.9095 0.109863 8.99986 0.109863C4.09021 0.109863 0.109863 4.09021 0.109863 8.99986C0.109863 13.9095 4.09021 17.8899 8.99986 17.8899Z"
            fill={`url(#${gradId01})`}
          />
          <path
            d="M8.99993 8.99674L4.79199 5.38452V8.10287L8.99993 11.7151L13.2079 8.10287V5.38452L8.99993 8.99674Z"
            fill="white"
          />
          <path d="M8.99989 7.37201L11.314 5.38452H6.68579L8.99989 7.37201Z" fill="white" />
          <path d="M13.2079 9.86328L10.0112 12.6083H13.2079V9.86328Z" fill="white" />
          <path d="M7.98869 12.609L4.79199 9.86401V12.609H7.98869Z" fill="white" />
        </g>
      </g>
      <defs>
        <linearGradient
          id={gradId01}
          x1="0.109863"
          y1="8.99986"
          x2="17.8899"
          y2="8.99986"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DDC194" />
          <stop offset="0.99" stopColor="#C2A676" />
        </linearGradient>
        <clipPath id={clipId01}>
          <rect x="0.109863" y="0.109863" width="17.78" height="17.78" rx="8.89" fill="white" />
        </clipPath>
        <clipPath id={clipId02}>
          <rect width="17.78" height="17.78" fill="white" transform="translate(0.109863 0.109863)" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default memo(Item);
