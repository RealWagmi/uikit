import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
  <Svg viewBox="0 0 24 24" {...props} stroke="none">
    <path d="M22.2 17.6334L14.0016 3.39563C13.7967 3.04681 13.5042 2.75758 13.1532 2.55662C12.8021 2.35566 12.4046 2.24994 12 2.24994C11.5955 2.24994 11.198 2.35566 10.8469 2.55662C10.4958 2.75758 10.2033 3.04681 9.99847 3.39563L1.80003 17.6334C1.60291 17.9708 1.49902 18.3546 1.49902 18.7453C1.49902 19.1361 1.60291 19.5198 1.80003 19.8572C2.00228 20.2081 2.29425 20.4989 2.64599 20.6997C2.99773 20.9006 3.39658 21.0042 3.80159 21H20.1985C20.6032 21.0039 21.0016 20.9001 21.353 20.6993C21.7044 20.4985 21.9961 20.2078 22.1982 19.8572C22.3956 19.52 22.4998 19.1363 22.5001 18.7456C22.5004 18.3548 22.3969 17.971 22.2 17.6334ZM20.8997 19.1063C20.8282 19.2282 20.7256 19.3289 20.6024 19.3981C20.4792 19.4673 20.3398 19.5024 20.1985 19.5H3.80159C3.66029 19.5024 3.52088 19.4673 3.39765 19.3981C3.27442 19.3289 3.17181 19.2282 3.10034 19.1063C3.0356 18.9966 3.00145 18.8717 3.00145 18.7444C3.00145 18.6171 3.0356 18.4921 3.10034 18.3825L11.2988 4.14469C11.3717 4.02335 11.4748 3.92295 11.598 3.85324C11.7212 3.78354 11.8603 3.7469 12.0019 3.7469C12.1435 3.7469 12.2826 3.78354 12.4058 3.85324C12.529 3.92295 12.6321 4.02335 12.705 4.14469L20.9035 18.3825C20.9676 18.4924 21.0011 18.6176 21.0005 18.7449C20.9998 18.8722 20.965 18.997 20.8997 19.1063ZM11.25 13.5V9.75C11.25 9.55109 11.329 9.36032 11.4697 9.21967C11.6103 9.07902 11.8011 9 12 9C12.1989 9 12.3897 9.07902 12.5304 9.21967C12.671 9.36032 12.75 9.55109 12.75 9.75V13.5C12.75 13.6989 12.671 13.8897 12.5304 14.0303C12.3897 14.171 12.1989 14.25 12 14.25C11.8011 14.25 11.6103 14.171 11.4697 14.0303C11.329 13.8897 11.25 13.6989 11.25 13.5ZM13.125 16.875C13.125 17.0975 13.059 17.315 12.9354 17.5C12.8118 17.685 12.6361 17.8292 12.4305 17.9144C12.225 17.9995 11.9988 18.0218 11.7806 17.9784C11.5623 17.935 11.3619 17.8278 11.2045 17.6705C11.0472 17.5132 10.9401 17.3127 10.8966 17.0945C10.8532 16.8762 10.8755 16.65 10.9607 16.4445C11.0458 16.2389 11.19 16.0632 11.375 15.9396C11.56 15.816 11.7775 15.75 12 15.75C12.2984 15.75 12.5845 15.8685 12.7955 16.0795C13.0065 16.2905 13.125 16.5766 13.125 16.875Z" />
  </Svg>
);

export default Icon;
