import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
  <Svg viewBox="0 0 12 12" {...props} fill="none">
    <path
      d="M6 6C8.27817 6 10.125 4.99264 10.125 3.75C10.125 2.50736 8.27817 1.5 6 1.5C3.72183 1.5 1.875 2.50736 1.875 3.75C1.875 4.99264 3.72183 6 6 6Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.875 3.75V6C1.875 7.24219 3.72188 8.25 6 8.25C8.27812 8.25 10.125 7.24219 10.125 6V3.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.875 6V8.25C1.875 9.49219 3.72188 10.5 6 10.5C8.27812 10.5 10.125 9.49219 10.125 8.25V6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Icon;
