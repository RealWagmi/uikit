import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
  <Svg viewBox="0 0 24 24" {...props} fill="none">
    <path
      d="M18.6687 4H5.33127C5.18077 4 5.08419 4.15997 5.15429 4.29315L9.97698 13.4563C9.9921 13.485 10 13.517 10 13.5494V16.9C10 16.963 10.0296 17.0222 10.08 17.06L13.68 19.76C13.8118 19.8589 14 19.7648 14 19.6V13.5494C14 13.517 14.0079 13.485 14.023 13.4563L18.8457 4.29315C18.9158 4.15997 18.8192 4 18.6687 4Z"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Icon;
