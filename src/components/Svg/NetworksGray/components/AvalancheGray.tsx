import { FC, ReactElement, PropsWithChildren, memo } from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Item: FC<PropsWithChildren<SvgProps>> = (props): ReactElement => {
  return (
    <Svg viewBox="0 0 24 24" {...props} fill="none" stroke="none">
      <path
        d="M15.9832 13.8066C16.3744 13.1309 17.0057 13.1309 17.3969 13.8066L19.833 18.0832C20.2242 18.7589 19.9042 19.3101 19.1217 19.3101H14.2139C13.4404 19.3101 13.1203 18.7589 13.5026 18.0832L15.9832 13.8066ZM11.2709 5.57344C11.6621 4.89772 12.2845 4.89772 12.6757 5.57344L13.2181 6.55146L14.4984 8.8009C14.8096 9.44106 14.8096 10.1968 14.4984 10.837L10.204 18.2788C9.8128 18.8834 9.16375 19.2657 8.44357 19.3101H4.87825C4.09584 19.3101 3.77576 18.7678 4.16696 18.0832L11.2709 5.57344Z"
        fill="#AFB6C9"
      />
    </Svg>
  );
};

export default memo(Item);
