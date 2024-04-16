import { FC, ReactElement, PropsWithChildren, memo } from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Item: FC<PropsWithChildren<SvgProps>> = (props): ReactElement => {
  return (
    <Svg viewBox="0 0 16 16" {...props} fill="none" stroke="none">
        <g clipPath="url(#clip0_11880_37523)">
            <path d="M16 7.99995C16 3.58174 12.4183 0 8 0C3.58165 0 0 3.58174 0 7.99995C0 12.4182 3.58165 15.9999 8 15.9999C12.4183 15.9999 16 12.4182 16 7.99995Z" fill="url(#paint0_radial_11880_37523)"/>
            <path d="M8 0.5C12.1422 0.5 15.5 3.85788 15.5 7.99995C15.5 12.142 12.1422 15.4999 8 15.4999C3.8578 15.4999 0.5 12.142 0.5 7.99995C0.5 3.85788 3.8578 0.5 8 0.5Z" stroke="#FDFEFE" strokeOpacity="0.2"/>
            <g clipPath="url(#clip1_11880_37523)">
                <path d="M7.94784 12.913C10.69 12.913 12.913 10.6939 12.913 7.95649C12.913 5.21909 10.69 3 7.94784 3C5.34623 3 3.21196 4.99742 3 7.53985H9.56277V8.37312H3C3.21196 10.9155 5.34623 12.913 7.94784 12.913Z" fill="white"/>
            </g>
        </g>
        <defs>
            <radialGradient id="paint0_radial_11880_37523" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8 7.99995) rotate(90) scale(7.99995 8)">
                <stop offset="0.255" stop-color="#2C6EFF"/>
                <stop offset="1" stop-color="#032AFF"/>
            </radialGradient>
            <clipPath id="clip0_11880_37523">
                <rect width="16" height="16" fill="white"/>
            </clipPath>
            <clipPath id="clip1_11880_37523">
                <rect width="10" height="10" fill="white" transform="translate(3 3)"/>
            </clipPath>
        </defs>
    </Svg>
  );
};

export default memo(Item);
