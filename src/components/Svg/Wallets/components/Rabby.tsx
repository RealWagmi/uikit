import { FC, ReactElement, PropsWithChildren, memo } from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";
import { v4 as uuid } from "uuid";

const Item: FC<PropsWithChildren<SvgProps>> = (props): ReactElement => {
  const grad0Id = uuid();
  const grad1Id = uuid();
  const grad2Id = uuid();
  const grad3Id = uuid();
  return (
    <Svg viewBox="0 0 40 40" {...props} fill="none" stroke="none">
      <rect x="0.5" y="0.5" width="39" height="39" rx="7.5" stroke="white" fill="white" strokeOpacity="0.2" />
      <path
        d="M35.1513 21.043C36.2547 18.5678 30.7674 11.6192 25.5187 8.75633C22.2085 6.51967 18.7789 6.81789 18.0632 7.80202C16.5423 9.94921 23.133 11.7982 27.5466 13.9155C26.5923 14.3331 25.6977 15.0786 25.1907 16.0031C23.5505 14.2138 19.942 12.663 15.7073 13.9155C12.8443 14.7506 10.4884 16.7486 9.5639 19.7309C9.35514 19.6414 9.08674 19.5817 8.84817 19.5817C7.86404 19.5817 7.05884 20.3869 7.05884 21.3711C7.05884 22.3552 7.86404 23.1604 8.84817 23.1604C9.0271 23.1604 9.59372 23.0411 9.59372 23.0411L18.7789 23.1008C15.1108 28.9459 12.1882 29.7809 12.1882 30.7949C12.1882 31.8088 14.9617 31.5404 16.0055 31.1527C21.0156 29.3634 26.3836 23.727 27.3081 22.1166C31.1849 22.6236 34.4356 22.6534 35.1513 21.043Z"
        fill={`url(#${grad0Id})`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.5765 13.915C27.7853 13.8256 27.7554 13.5273 27.6958 13.2888C27.5765 12.752 25.3398 10.5451 23.2523 9.56101C20.3894 8.21901 18.3018 8.27865 18.0036 8.90492C18.5702 10.0978 21.284 11.2012 24.0873 12.3941C25.2504 12.8713 26.4731 13.3782 27.5765 13.915Z"
        fill={`url(#${grad1Id})`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.9382 25.9043C23.3715 25.6955 22.7155 25.4868 21.9699 25.3078C22.7453 23.9062 22.9242 21.7888 22.1787 20.4767C21.1349 18.6277 19.8227 17.6436 16.751 17.6436C15.081 17.6436 10.548 18.2102 10.4586 21.9976C10.4586 22.3853 10.4586 22.7431 10.4884 23.101H18.7789C17.6755 24.8605 16.6317 26.1727 15.7073 27.1568C16.8107 27.4252 17.7053 27.6638 18.5404 27.9024C19.3157 28.1111 20.0613 28.29 20.8068 28.4988C21.9401 27.6638 23.0137 26.7691 23.9382 25.9043Z"
        fill={`url(#${grad2Id})`}
      />
      <path
        d="M9.44462 22.6539C9.77266 25.5168 11.4129 26.6501 14.753 26.9781C18.093 27.3062 20.0017 27.0974 22.5365 27.3062C24.6539 27.4851 26.5625 28.5885 27.2484 28.2008C27.8747 27.8728 27.5168 26.6501 26.6818 25.8747C25.5784 24.8607 24.0575 24.1748 21.4033 23.9064C21.9401 22.4452 21.791 20.3874 20.956 19.284C19.7631 17.6736 17.5562 16.9579 14.753 17.2561C11.8304 17.614 9.02711 19.0753 9.44462 22.6539Z"
        fill={`url(#${grad3Id})`}
      />
      <defs>
        <linearGradient id={grad0Id} x1="15.4039" y1="18.7336" x2="34.9512" y2="24.2768" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8797FF" />
          <stop offset="1" stopColor="#AAA8FF" />
        </linearGradient>
        <linearGradient id={grad1Id} x1="30.9339" y1="19.1707" x2="16.8297" y2="5.03193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B22A0" />
          <stop offset="1" stopColor="#5156D8" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={grad2Id} x1="24.3273" y1="26.4153" x2="10.7786" y2="18.6257" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B1E8F" />
          <stop offset="1" stopColor="#6A6FFB" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={grad3Id} x1="14.4596" y1="20.3417" x2="23.6175" y2="31.9778" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8898FF" />
          <stop offset="0.9839" stopColor="#5F47F1" />
        </linearGradient>
      </defs>
    </Svg>
  );
};

export default memo(Item);
