import { FC, ReactElement, PropsWithChildren, memo } from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Item: FC<PropsWithChildren<SvgProps>> = (props): ReactElement => {
  return (
    <Svg viewBox="0 0 24 24" {...props} fill="none" stroke="none">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.9999 12.2366L16.759 6.00238V10.5681L10.5625 15.1394L16.759 15.1437V18.4709L22.9999 12.2366Z"
          fill="#AFB6C9"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 12.2342L7.24083 18.4685V13.9511L13.392 9.37682L7.24083 9.3726V6L1 12.2342Z"
          fill="#AFB6C9"
        />
      </svg>
    </Svg>
  );
};

export default memo(Item);
