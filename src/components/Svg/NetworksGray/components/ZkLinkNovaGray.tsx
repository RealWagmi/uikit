import { FC, ReactElement, PropsWithChildren, memo } from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Item: FC<PropsWithChildren<SvgProps>> = (props): ReactElement => {
  return (
    <Svg viewBox="0 0 24 24" {...props} fill="none" stroke="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.4587 10.799L11.9727 13.4121V18.6384L7.4587 21.2515L2.9447 18.6384V13.4121L7.4587 10.799Z"
        stroke="#AFB6C9"
        strokeWidth="1.29685"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.486 10.799L21 13.4121V18.6384L16.486 21.2515L11.972 18.6384V13.4121L16.486 10.799Z"
        stroke="#AFB6C9"
        strokeWidth="1.29685"
      />
      <path d="M11.9717 18.5657V13.3395" stroke="#AFB6C9" strokeWidth="1.29685" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9755 2.95715L16.4895 5.57029V10.7965L11.9755 13.4097L7.46155 10.7965V5.57029L11.9755 2.95715Z"
        stroke="#AFB6C9"
        strokeWidth="1.29685"
      />
      <path d="M16.4911 10.799L11.9771 13.4121L7.46313 10.799" stroke="#AFB6C9" strokeWidth="1.29685" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9755 8.19067L16.4895 10.8038V16.0301L11.9755 18.6432L7.46155 16.0301V10.8038L11.9755 8.19067Z"
        stroke="#AFB6C9"
        strokeWidth="1.29685"
        strokeLinecap="round"
      />
      <path
        d="M11.9857 14.5251C12.7028 14.5251 13.2841 13.9437 13.2841 13.2266C13.2841 12.5095 12.7028 11.9281 11.9857 11.9281C11.2685 11.9281 10.6871 12.5095 10.6871 13.2266C10.6871 13.9437 11.2685 14.5251 11.9857 14.5251Z"
        fill="#AFB6C9"
      />
    </Svg>
  );
};

export default memo(Item);
