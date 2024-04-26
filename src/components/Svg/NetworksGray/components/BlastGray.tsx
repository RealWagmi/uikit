import { FC, ReactElement, PropsWithChildren, memo } from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Item: FC<PropsWithChildren<SvgProps>> = (props): ReactElement => {
  return (
    <Svg viewBox="0 0 24 24" {...props} fill="none" stroke="none">
      <path
        d="M18.2906 11.4089L21.7928 9.66378L23 5.95837L20.5855 4.20129H4.50886L0.791504 6.96242H19.6891L18.685 10.0702H11.1069L10.3777 12.3412H17.9559L15.8283 18.8795L19.3783 17.1224L20.6453 13.2018L18.2667 11.4567L18.2906 11.4089Z"
        fill="#AFB6C9"
      />
      <path
        d="M6.13421 16.0699L8.32159 9.25679L5.89515 7.43994L2.24951 18.8789H15.828L16.7364 16.0699H6.13421Z"
        fill="#AFB6C9"
      />
    </Svg>
  );
};

export default memo(Item);
