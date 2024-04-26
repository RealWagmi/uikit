import { FC, ReactElement, PropsWithChildren, memo } from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Item: FC<PropsWithChildren<SvgProps>> = (props): ReactElement => {
  return (
    <Svg viewBox="0 0 24 24" {...props} fill="none" stroke="none">
      <path d="M6 11.682L12.2562 15.2251V1.72949L6 11.682Z" fill="#AFB6C9" />
      <path d="M12.2562 1.72949V15.2269L18.5105 11.6838L12.2562 1.72949Z" fill="#AFB6C9" />
      <path d="M6 13.819L12.2562 22.2703V17.364L6 13.819Z" fill="#AFB6C9" />
      <path d="M12.2562 17.3638V22.2702L18.5143 13.8188L12.2562 17.3638Z" fill="#AFB6C9" />
    </Svg>
  );
};

export default memo(Item);
