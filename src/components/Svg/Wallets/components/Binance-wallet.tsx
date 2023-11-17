import { FC, ReactElement, PropsWithChildren, memo } from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Item: FC<PropsWithChildren<SvgProps>> = (props): ReactElement => (
  <Svg viewBox="0 0 32 32" {...props} fill="none" stroke="none">
    <rect width="32" height="32" rx="8" fill="#161C21"/>
    <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" stroke="white" strokeOpacity="0.2"/>
    <path d="M10.3606 8.56759L15.9967 5.28693L21.6327 8.56759L19.5606 9.77955L15.9967 7.71086L12.4327 9.77955L10.3606 8.56759ZM21.6327 12.705L19.5606 11.493L15.9967 13.5617L12.4327 11.493L10.3606 12.705V15.1289L13.9246 17.1976V21.335L15.9967 22.547L18.0687 21.335V17.1976L21.6327 15.1289V12.705ZM21.6327 19.2663V16.8424L19.5606 18.0543V20.4783L21.6327 19.2663ZM23.1039 20.123L19.5399 22.1917V24.6157L25.1759 21.335V14.7737L23.1039 15.9856V20.123ZM21.0318 10.6363L23.1039 11.8482V14.2722L25.1759 13.0602V10.6363L23.1039 9.42432L21.0318 10.6363ZM13.9246 23.0694V25.4933L15.9967 26.7053L18.0687 25.4933V23.0694L15.9967 24.2813L13.9246 23.0694ZM10.3606 19.2663L12.4327 20.4783V18.0543L10.3606 16.8424V19.2663ZM13.9246 10.6363L15.9967 11.8482L18.0687 10.6363L15.9967 9.42432L13.9246 10.6363ZM8.88945 11.8482L10.9615 10.6363L8.88945 9.42432L6.81738 10.6363V13.0602L8.88945 14.2722V11.8482ZM8.88945 15.9856L6.81738 14.7737V21.335L12.4534 24.6157V22.1917L8.88945 20.123V15.9856Z" fill="#F0B90B"/>
  </Svg>
);

export default memo(Item);