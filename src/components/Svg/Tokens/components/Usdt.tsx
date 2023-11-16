import { FC, ReactElement, PropsWithChildren } from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Token: FC<PropsWithChildren<SvgProps>> = (props): ReactElement => (
  <Svg viewBox="0 0 32 32" {...props} fill="none" stroke="none">
    <circle cx="16" cy="16" r="16" fill="url(#paint0_radial_2855_61199)"/>
    <circle cx="16" cy="16" r="15.5" stroke="white" strokeOpacity="0.2"/>
    <path d="M18.2361 12.6133V9.86895H24.4014V5.6875H7.61308V9.86895H13.7791V12.6111C8.76792 12.8454 5 13.8556 5 15.0658C5 16.276 8.76973 17.2862 13.7791 17.522V26.3125H18.2376V17.5212C23.2397 17.2862 27 16.2767 27 15.0676C27 13.8585 23.2397 12.8491 18.2376 12.614L18.2361 12.6133ZM18.2376 16.7767V16.7745C18.1118 16.7826 17.4655 16.822 16.0265 16.822C14.876 16.822 14.0666 16.7888 13.7813 16.7737V16.7774C9.35404 16.5778 6.04936 15.793 6.04936 14.854C6.04936 13.915 9.3544 13.1313 13.7813 12.9313V15.9956C14.0713 16.0159 14.9006 16.0657 16.0453 16.0657C17.4202 16.0657 18.1114 16.0074 18.2383 15.9956V12.9313C22.6568 13.1317 25.9539 13.9172 25.9539 14.8529C25.9539 15.7886 22.6554 16.5745 18.2383 16.7748" fill="white"/>
    <defs>
      <radialGradient id="paint0_radial_2855_61199" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(16 16) rotate(90) scale(16)">
        <stop offset="0.445288" stopColor="#38B388"/>
        <stop offset="1" stopColor="#118059"/>
      </radialGradient>
    </defs>
  </Svg>
);

export default Token;