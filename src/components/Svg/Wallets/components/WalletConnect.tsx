import { FC, ReactElement, PropsWithChildren, memo } from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";
import { v4 as uuid } from "uuid";

const Item: FC<PropsWithChildren<SvgProps>> = (props): ReactElement => {
  return (
    <Svg viewBox="0 0 32 32" {...props} fill="none" stroke="none">
      <rect width="32" height="32" rx="8" fill="#0052FF"/>
      <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" stroke="white" stroke-opacity="0.2"/>
      <path d="M16.2531 21.875C13.1469 21.875 10.6281 19.3594 10.6281 16.25C10.6281 13.1406 13.1469 10.625 16.2531 10.625C19.0375 10.625 21.35 12.6562 21.7938 15.3125H27.4594C26.9813 9.5375 22.1469 5 16.25 5C10.0375 5 5 10.0375 5 16.25C5 22.4625 10.0375 27.5 16.25 27.5C22.1469 27.5 26.9813 22.9625 27.4594 17.1875H21.7906C21.3438 19.8438 19.0375 21.875 16.2531 21.875Z" fill="white"/>
    </Svg>
  );
};

export default memo(Item);
