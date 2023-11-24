import { PropsWithChildren, FC, ReactElement, memo } from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: FC<PropsWithChildren<SvgProps>> = (props): ReactElement => (
  <Svg viewBox="0 0 16 16" {...props} fill="none">
    <path d="M7.66667 14L5 11.3333M7.66667 14V2V14ZM7.66667 14L10.3333 11.3333L7.66667 14Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

export default memo(Icon);
