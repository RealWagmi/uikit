import { FC, ReactElement, PropsWithChildren, memo } from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Item: FC<PropsWithChildren<SvgProps>> = (props): ReactElement => {
  return (
    <Svg viewBox="0 0 24 24" {...props} fill="none" stroke="none">
      <path
        d="M11.9843 21C16.9635 21 21 16.9706 21 12C21 7.02943 16.9635 3 11.9843 3C7.2603 3 3.38489 6.62693 3 11.2435H14.9167V12.7565H3C3.38489 17.3731 7.2603 21 11.9843 21Z"
        fill="#AFB6C9"
      />
    </Svg>
  );
};

export default memo(Item);
