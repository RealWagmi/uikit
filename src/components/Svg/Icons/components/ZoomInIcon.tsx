import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
  <Svg viewBox="0 0 24 24" {...props} fill="none">
    <path
      d="M19 19L15.6945 15.6886L19 19ZM17.5263 11.2632C17.5263 12.9243 16.8664 14.5173 15.6919 15.6919C14.5173 16.8664 12.9243 17.5263 11.2632 17.5263C9.60207 17.5263 8.00901 16.8664 6.83444 15.6919C5.65987 14.5173 5 12.9243 5 11.2632C5 9.60207 5.65987 8.00901 6.83444 6.83444C8.00901 5.65987 9.60207 5 11.2632 5C12.9243 5 14.5173 5.65987 15.6919 6.83444C16.8664 8.00901 17.5263 9.60207 17.5263 11.2632V11.2632Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M8 11H14M11 8V14" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

export default Icon;
