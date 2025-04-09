import { FC, ReactElement, PropsWithChildren, memo } from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";
import { v4 as uuid } from "uuid";

const Item: FC<PropsWithChildren<SvgProps>> = (props): ReactElement => {
  const clipId1 = uuid();
  const clipId2 = uuid();

  return (
    <Svg viewBox="0 0 32 32" {...props} fill="none" stroke="none">
      <g clipPath={`url(#${clipId1})`}>
        <rect width="32" height="32" rx="6" fill="#FF0420" />
        <rect x="0.5" y="0.5" width="31" height="31" rx="5.5" stroke="white" stroke-opacity="0.2" />
        <g clipPath={`url(#${clipId2})`}>
          <path d="M16.0001 22.1099V26.5934C11.3882 26.5934 7.64844 22.8536 7.64844 18.2418C7.64844 13.6299 11.3882 9.89013 16.0001 9.89013V5.40659C20.6119 5.40659 24.3517 9.14637 24.3517 13.7582C24.3517 18.3701 20.6119 22.1099 16.0001 22.1099Z" fill="white" />
          <path d="M16 4C9.37319 4 4 9.37318 4 16C4 22.6268 9.37319 28 16 28C22.6268 28 28 22.6268 28 16C28 9.37318 22.6268 4 16 4ZM16 22.1099V26.5934C11.3881 26.5934 7.64837 22.8536 7.64837 18.2418C7.64837 13.6299 11.3881 9.89014 16 9.89014V5.40659C20.6118 5.40659 24.3516 9.14638 24.3516 13.7582C24.3516 18.3701 20.6118 22.1099 16 22.1099ZM20.1318 15.9613V16.0387C18.3103 16.946 16.9459 18.3103 16.0387 20.1318H15.9613C15.054 18.3103 13.6896 16.946 11.8681 16.0387V15.9613C13.6896 15.054 15.054 13.6897 15.9613 11.8682H16.0387C16.9459 13.6897 18.3103 15.054 20.1318 15.9613Z" fill="#FF0420" />
        </g>
      </g>
      <defs>
        <clipPath id={clipId1}>
          <rect width="32" height="32" fill="white" />
        </clipPath>
        <clipPath id={clipId2}>
          <rect width="24" height="24" fill="white" transform="translate(4 4)" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default memo(Item);
