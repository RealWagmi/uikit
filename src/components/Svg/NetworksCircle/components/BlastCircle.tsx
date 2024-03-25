import { FC, ReactElement, PropsWithChildren, memo } from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Item: FC<PropsWithChildren<SvgProps>> = (props): ReactElement => {
  return (
    <Svg viewBox="0 0 16 16" {...props} fill="none" stroke="none">
        <g clip-path="url(#clip0_11080_34338)">
        <path d="M16 7.99995C16 3.58174 12.4183 0 8 0C3.58165 0 0 3.58174 0 7.99995C0 12.4182 3.58165 15.9999 8 15.9999C12.4183 15.9999 16 12.4182 16 7.99995Z" fill="#050B09"/>
        <path d="M8 0.5C12.1422 0.5 15.5 3.85788 15.5 7.99995C15.5 12.142 12.1422 15.4999 8 15.4999C3.8578 15.4999 0.5 12.142 0.5 7.99995C0.5 3.85788 3.8578 0.5 8 0.5Z" stroke="black" stroke-opacity="0.8"/>
        <path d="M10.8352 7.85343L12.445 7.05125L13 5.34801L11.8901 4.54034H4.50024L2.7915 5.80953H11.478L11.0165 7.23806H7.53311L7.19796 8.28198H10.6814L9.70337 11.2874L11.3352 10.4797L11.9176 8.67758L10.8242 7.8754L10.8352 7.85343Z" fill="#FCFC03"/>
        <path d="M5.24757 9.99602L6.25303 6.86425L5.13769 6.02911L3.46191 11.2872H9.70347L10.121 9.99602H5.24757Z" fill="#FCFC03"/>
        </g>
        <defs>
        <clipPath id="clip0_11080_34338">
        <rect width="16" height="16" fill="white"/>
        </clipPath>
        </defs>
    </Svg>
  );
};

export default memo(Item);
