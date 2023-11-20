import { FC, ReactElement, PropsWithChildren, memo } from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Token: FC<PropsWithChildren<SvgProps>> = (props): ReactElement => (
  <Svg viewBox="0 0 32 32" {...props} fill="none" stroke="none">
    <g clipPath="url(#clip0_4818_109049)">
      <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#7EB0B3"/>
      <path d="M12.1201 22.924H19.5561L15.8401 19.204L12.1201 22.924Z" fill="white"/>
      <path d="M19.8081 11.708V15.54L15.8401 11.572L11.8681 15.54V11.872L9.08008 9.40799V18.332V18.524V22.172L15.8401 15.416L22.5961 22.172V18.356V18.332V9.23999L19.8081 11.708Z" fill="white"/>
    </g>
    <defs>
      <clipPath id="clip0_4818_109049">
        <rect width="32" height="32" fill="white"/>
      </clipPath>
    </defs>
  </Svg>
);

export default memo(Token);

