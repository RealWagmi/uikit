import { FC, ReactElement, PropsWithChildren, memo } from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";
import { v4 as uuid } from "uuid";

const Token: FC<PropsWithChildren<SvgProps>> = (props): ReactElement => {
  const id = uuid();
  return (
    <Svg viewBox="0 0 32 32" {...props} fill="none" stroke="none">
      <g clipPath={`url(#${id})`}>
        <path
          d="M15.9936 31.6032C24.6145 31.6032 31.6032 24.6145 31.6032 15.9936C31.6032 7.37263 24.6145 0.383972 15.9936 0.383972C7.37266 0.383972 0.384003 7.37263 0.384003 15.9936C0.384003 24.6145 7.37266 31.6032 15.9936 31.6032Z"
          fill="#FF564F"
        />
        <path d="M11.8679 25.0217L11.8679 6.98651L8.71912 6.98651L8.71912 25.0217H11.8679Z" fill="white" />
        <path d="M20.4736 25.0176L13.5744 16L20.4736 6.98242H24.416L17.6192 16L24.416 25.0176H20.4736Z" fill="white" />
      </g>
      <defs>
        <clipPath id={id}>
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default memo(Token);
