import { FC, ReactElement, PropsWithChildren, memo } from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Item: FC<PropsWithChildren<SvgProps>> = (props): ReactElement => {
  return (
    <Svg viewBox="0 0 24 24" {...props} fill="none" stroke="none">
      <path d="M11.9215 14.6146L14.4946 18.5115L16.8717 17.1823L13.4922 12.0426L11.9215 14.6146Z" fill="#AFB6C9" />
      <path
        d="M19.0362 15.619L19.0344 14.554L15.3419 9.00439L13.9719 11.2475L17.5366 16.8103L18.8255 16.0897C18.9519 15.9906 19.0284 15.8452 19.0364 15.6883L19.0362 15.619Z"
        fill="#AFB6C9"
      />
      <path
        d="M3.5625 16.6234L5.38256 17.6354L11.4394 8.26272L10.4114 8.23654C9.53557 8.2246 8.59209 8.44431 8.15906 9.12639L4.71961 14.2704L3.5625 15.9859V16.6234Z"
        fill="#AFB6C9"
      />
      <path
        d="M14.9351 8.2627L12.2259 8.27219L6.09656 18.032L8.23895 19.2222L8.82156 18.2688L14.9351 8.2627Z"
        fill="#AFB6C9"
      />
      <path
        d="M20.1779 8.24928C20.1552 7.70257 19.8484 7.20209 19.3679 6.91071L12.6327 3.17334C12.1574 2.94239 11.5636 2.9421 11.0874 3.17319C11.0311 3.20059 4.53764 6.83445 4.53764 6.83445C4.44777 6.87605 4.3612 6.92558 4.27978 6.98182C3.85083 7.27846 3.58936 7.73946 3.5625 8.24591V15.9859L4.71961 14.2704L4.70951 8.29822C4.71085 8.27638 4.7137 8.25488 4.71773 8.23367C4.7439 8.09316 4.8252 7.9678 4.94761 7.88309C4.97816 7.86199 11.5826 4.17318 11.6036 4.16306C11.7588 4.08784 11.9561 4.08695 12.1115 4.16073L18.7596 7.85057C18.9168 7.94723 19.0154 8.1111 19.0242 8.29025V15.6883C19.0162 15.8452 18.9519 15.9906 18.8255 16.0897L17.5366 16.8103L16.8716 17.1822L14.4946 18.5115L12.084 19.8594C11.9542 19.9047 11.8024 19.9021 11.6736 19.8516L8.82155 18.2688L8.23894 19.2222L10.802 20.6462C10.8868 20.6927 10.9623 20.7339 11.0242 20.7675C11.1202 20.8194 11.1856 20.8541 11.2087 20.8649C11.3908 20.9503 11.6529 21 11.8891 21C12.1057 21 12.3169 20.9616 12.5167 20.8861L19.5183 16.9735C19.9202 16.6731 20.1566 16.22 20.1779 15.7291V8.24928Z"
        fill="#AFB6C9"
      />
    </Svg>
  );
};

export default memo(Item);
