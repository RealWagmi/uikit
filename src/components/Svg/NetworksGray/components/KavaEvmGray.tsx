import { FC, ReactElement, PropsWithChildren, memo } from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Item: FC<PropsWithChildren<SvgProps>> = (props): ReactElement => {
  return (
    <Svg viewBox="0 0 24 24" {...props} fill="none" stroke="none">
      <path d="M7.95714 3H5V19.9886H7.95714V3Z" fill="#AFB6C9" />
      <path
        d="M16.0751 20.0003L9.57422 11.5L16.0751 3.01172H19.7985L13.3934 11.5L19.7985 20.0003H16.0751Z"
        fill="#AFB6C9"
      />
    </Svg>
  );
};

export default memo(Item);
