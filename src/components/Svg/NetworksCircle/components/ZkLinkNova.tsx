import { FC, ReactElement, PropsWithChildren, memo } from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Item: FC<PropsWithChildren<SvgProps>> = (props): ReactElement => {
    return (
        <Svg viewBox="0 0 16 16" {...props} fill="none" stroke="none">
            <circle cx="8" cy="8" r="8" fill="#131313"/>
            <circle cx="8" cy="8" r="7.5" stroke="white" strokeOpacity="0.2"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M5.95793 7.45532L7.972 8.62128V10.9532L5.95793 12.1191L3.94385 10.9532V8.62128L5.95793 7.45532Z" stroke="#03D498" strokeWidth="0.523262"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M9.98575 7.45532L11.9998 8.62128V10.9532L9.98575 12.1191L7.97168 10.9532V8.62128L9.98575 7.45532Z" stroke="#03D498" strokeWidth="0.523262"/>
            <path d="M7.97168 10.9208V8.58893" stroke="#03D498" strokeWidth="0.523262"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M7.97354 3.95648L9.98763 5.12243V7.45431L7.97354 8.62025L5.95947 7.45431V5.12243L7.97354 3.95648Z" stroke="#03D498" strokeWidth="0.523262"/>
            <path d="M9.98812 7.45532L7.97403 8.62128L5.95996 7.45532" stroke="#03D498" strokeWidth="0.523262"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M7.97354 6.29163L9.98763 7.45757V9.78946L7.97354 10.9554L5.95947 9.78946V7.45757L7.97354 6.29163Z" stroke="white" strokeWidth="0.523262" strokeLinecap="round"/>
            <path d="M7.97782 9.11791C8.2978 9.11791 8.55718 8.85851 8.55718 8.53853C8.55718 8.21857 8.2978 7.95917 7.97782 7.95917C7.65784 7.95917 7.39844 8.21857 7.39844 8.53853C7.39844 8.85851 7.65784 9.11791 7.97782 9.11791Z" fill="#03D498"/>
        </Svg>
    );
};

export default memo(Item);
