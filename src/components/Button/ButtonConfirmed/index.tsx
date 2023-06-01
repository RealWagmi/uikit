import styled from "styled-components";
import { BaseButton } from "../BaseButton";
import { ButtonProps } from "rebass";
import ButtonPrimary from "../ButtonPrimary";

const ButtonConfirmedStyle = styled(BaseButton)`
  background-color: ${({ theme }) => theme.deprecated_bg3};
  color: ${({ theme }) => theme.textPrimary};
  /* border: 1px solid ${({ theme }) => theme.accentSuccess}; */

  &:disabled {
    opacity: 50%;
    background-color: ${({ theme }) => theme.backgroundInteractive};
    color: ${({ theme }) => theme.textSecondary};
    cursor: auto;
  }
`;

export default function ButtonConfirmed({
  confirmed,
  altDisabledStyle,
  ...rest
}: { confirmed?: boolean; altDisabledStyle?: boolean } & ButtonProps) {
  if (confirmed) {
    return <ButtonConfirmedStyle {...rest} />;
  } else {
    return <ButtonPrimary {...rest} altDisabledStyle={altDisabledStyle} />;
  }
}
