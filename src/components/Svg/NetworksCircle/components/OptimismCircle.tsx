import { FC, ReactElement, PropsWithChildren, memo } from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";
import { v4 as uuid } from "uuid";

const Item: FC<PropsWithChildren<SvgProps>> = (props): ReactElement => {
  const clipId = uuid();

  return (
    <Svg viewBox="0 0 16 16" {...props} fill="none" stroke="none">
      <circle cx="8" cy="8" r="8" fill="#FF0420" />
      <circle cx="8" cy="8" r="7.5" stroke="white" stroke-opacity="0.2" />
      <g clipPath={`url(#${clipId})`}>
        <path d="M8.00021 11.5641V14.1795C5.30993 14.1795 3.12842 11.998 3.12842 9.30771C3.12842 6.61744 5.30993 4.43593 8.00021 4.43593V1.82053C10.6904 1.82053 12.872 4.00207 12.872 6.69231C12.872 9.38258 10.6904 11.5641 8.00021 11.5641Z" fill="white" />
        <path d="M8 1C4.13436 1 1 4.13435 1 8C1 11.8656 4.13436 15 8 15C11.8656 15 15 11.8656 15 8C15 4.13435 11.8656 1 8 1ZM8 11.5641V14.1795C5.30973 14.1795 3.12822 11.9979 3.12822 9.3077C3.12822 6.61743 5.30973 4.43591 8 4.43591V1.82051C10.6902 1.82051 12.8718 4.00205 12.8718 6.69229C12.8718 9.38256 10.6902 11.5641 8 11.5641ZM10.4102 7.97742V8.02257C9.34768 8.55181 8.55178 9.34767 8.02258 10.4102H7.97743C7.44819 9.34767 6.65229 8.55181 5.58973 8.02257V7.97742C6.65229 7.44819 7.44819 6.65232 7.97743 5.58976H8.02258C8.55178 6.65232 9.34768 7.44819 10.4102 7.97742Z" fill="#FF0420" />
      </g>
      <defs>
        <clipPath id={clipId}>
          <rect width="14" height="14" fill="white" transform="translate(1 1)" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default memo(Item);
