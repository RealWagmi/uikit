import { FC, ReactElement, PropsWithChildren, memo } from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Item: FC<PropsWithChildren<SvgProps>> = (props): ReactElement => {
    return (
        <Svg viewBox="0 0 32 32" {...props} fill="none" stroke="none">
            <rect width="32" height="32" rx="6" fill="#131313"/>
            <rect x="0.5" y="0.5" width="31" height="31" rx="5.5" stroke="white" strokeOpacity="0.2"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M10.4584 14.5754L15.9724 17.7675V24.1516L10.4584 27.3437L4.94434 24.1516V17.7675L10.4584 14.5754Z" stroke="#03D498" strokeWidth="1.43255"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M21.4857 14.5754L26.9997 17.7675V24.1516L21.4857 27.3437L15.9717 24.1516V17.7675L21.4857 14.5754Z" stroke="#03D498" strokeWidth="1.43255"/>
            <path d="M15.9712 24.0629V17.6788" stroke="#03D498" strokeWidth="1.43255"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M15.9759 4.99634L21.49 8.18839V14.5725L15.9759 17.7645L10.4619 14.5725V8.18839L15.9759 4.99634Z" stroke="#03D498" strokeWidth="1.43255"/>
            <path d="M21.4919 14.5754L15.9779 17.7675L10.4639 14.5754" stroke="#03D498" strokeWidth="1.43255"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M15.9759 11.3893L21.49 14.5814V20.9655L15.9759 24.1575L10.4619 20.9655V14.5814L15.9759 11.3893Z" stroke="white" strokeWidth="1.43255" strokeLinecap="round"/>
            <path d="M15.988 19.1271C16.8641 19.1271 17.5742 18.4169 17.5742 17.5409C17.5742 16.6649 16.8641 15.9547 15.988 15.9547C15.112 15.9547 14.4019 16.6649 14.4019 17.5409C14.4019 18.4169 15.112 19.1271 15.988 19.1271Z" fill="#03D498"/>
        </Svg>
    );
};

export default memo(Item);
