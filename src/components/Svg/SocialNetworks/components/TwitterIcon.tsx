import { FC, ReactElement, PropsWithChildren, memo } from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Item: FC<PropsWithChildren<SvgProps>> = (props): ReactElement => (
  <Svg viewBox="0 0 20 20" {...props} fill="none" stroke="none">
    <path
      d="M15.1708 1.875H17.9275L11.905 8.75833L18.99 18.125H13.4416L9.09662 12.4442L4.12495 18.125H1.36662L7.80828 10.7625L1.01245 1.875H6.69995L10.6275 7.0675L15.1691 1.875H15.1708ZM14.2033 16.475H15.7308L5.87078 3.43833H4.23162L14.2033 16.475Z"
      fill="#AFB6C9"
    />
  </Svg>
);

export default memo(Item);
