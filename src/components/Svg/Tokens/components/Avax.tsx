import { FC, ReactElement, PropsWithChildren, memo } from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Token: FC<PropsWithChildren<SvgProps>> = (props): ReactElement => (
  <Svg viewBox="0 0 32 32" {...props} fill="none" stroke="none">
    <circle cx="16" cy="16" r="16" fill="url(#paint0_radial_2855_61205)"/>
    <circle cx="16" cy="16" r="15.5" stroke="white" strokeOpacity="0.2"/>
    <path d="M20.4811 18.0324C20.9212 17.2722 21.6314 17.2722 22.0715 18.0324L24.8122 22.8436C25.2523 23.6038 24.8922 24.2239 24.012 24.2239H18.4906C17.6204 24.2239 17.2603 23.6038 17.6904 22.8436L20.4811 18.0324ZM15.1798 8.77015C15.6199 8.00997 16.3201 8.00997 16.7602 8.77015L17.3703 9.87042L18.8107 12.401C19.1608 13.1212 19.1608 13.9714 18.8107 14.6916L13.9795 23.0637C13.5394 23.7438 12.8092 24.1739 11.999 24.2239H7.98803C7.10782 24.2239 6.74773 23.6138 7.18784 22.8436L15.1798 8.77015Z" fill="white"/>
    <defs>
      <radialGradient id="paint0_radial_2855_61205" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(16 16) rotate(90) scale(16)">
        <stop stopColor="#D74F49"/>
        <stop offset="1" stopColor="#E84142"/>
      </radialGradient>
    </defs>
  </Svg>
);

export default memo(Token);