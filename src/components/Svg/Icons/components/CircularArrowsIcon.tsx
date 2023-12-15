import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
  <Svg viewBox="0 0 24 24" {...props} fill="none">
    <path
      d="M16.5157 14.6516H21.0157M21.0157 14.6516V19.1516M21.0157 14.6516L17.8337 17.8336C17.0676 18.5997 16.1581 19.2074 15.1572 19.622C14.1562 20.0366 13.0834 20.25 12 20.25C10.9166 20.25 9.84383 20.0366 8.84289 19.622C7.84196 19.2074 6.93248 18.5997 6.1664 17.8336M7.48438 9.34838H2.98438M2.98438 9.34838V4.84838M2.98438 9.34838L6.1664 6.16637C6.93248 5.40029 7.84196 4.7926 8.84289 4.37799C9.84383 3.96339 10.9166 3.75 12 3.75C13.0834 3.75 14.1562 3.96339 15.1572 4.37799C16.1581 4.7926 17.0676 5.40029 17.8337 6.16637"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Icon;
