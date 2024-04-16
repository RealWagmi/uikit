import { FC, ReactElement, PropsWithChildren, memo } from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Item: FC<PropsWithChildren<SvgProps>> = (props): ReactElement => {
  return (
    <Svg viewBox="0 0 32 32" {...props} fill="none" stroke="none">
        <rect width="32" height="32" rx="6" fill="#050B09"/>
        <rect x="0.5" y="0.5" width="31" height="31" rx="5.5" stroke="black" strokeOpacity="0.8"/>
        <path d="M23.0749 15.8567L26.8925 13.9544L28.2085 9.91531L25.5765 8H8.05212L4 11.0098H24.5993L23.5049 14.3974H15.2443L14.4495 16.873H22.7101L20.3909 24L24.2606 22.0847L25.6417 17.8111L23.0489 15.9088L23.0749 15.8567Z" fill="#FCFC03"/>
        <path d="M9.82388 20.9375L12.2082 13.5108L9.5633 11.5303L5.58936 23.9994H20.3907L21.3809 20.9375H9.82388Z" fill="#FCFC03"/>
    </Svg>
  );
};

export default memo(Item);
