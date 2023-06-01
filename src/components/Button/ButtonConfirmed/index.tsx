import styled from "styled-components";
import { BaseButton } from "../BaseButton";
import { ButtonProps } from "rebass";
import ButtonPrimary from "../ButtonPrimary";

const ButtonConfirmedStyle = styled(BaseButton)`
  background-color: ${({ theme }) => theme.buttonConfirmed.background};
  color: ${({ theme }) => theme.buttonConfirmed.color};

  &:disabled {
    opacity: 50%;
    background-color: ${({ theme }) => theme.buttonConfirmed.backgroundDisabled};
    color: ${({ theme }) => theme.buttonConfirmed.colorDisabled};
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
