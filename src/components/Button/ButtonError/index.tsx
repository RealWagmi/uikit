import { ButtonProps } from "rebass";
import styled from "styled-components";
import { BaseButton } from "../BaseButton";
import ButtonPrimary from "../ButtonPrimary";

const ButtonErrorStyle = styled(BaseButton)`
  background-color: ${({ theme }) => theme.buttonError.color};
  border: 1px solid ${({ theme }) => theme.buttonError.color};

  &:focus {
    box-shadow: 0 0 0 1pt ${({ theme }) => theme.buttonError.focusColor};
    background-color: ${({ theme }) => theme.buttonError.focusColor};
  }
  &:hover {
    background-color: ${({ theme }) => theme.buttonError.focusColor};
  }
  &:active {
    box-shadow: 0 0 0 1pt ${({ theme }) => theme.buttonError.activeColor};
    background-color: ${({ theme }) => theme.buttonError.activeColor};
  }
  &:disabled {
    opacity: 50%;
    cursor: auto;
    box-shadow: none;
    background-color: ${({ theme }) => theme.buttonError.color};
    border: 1px solid ${({ theme }) => theme.buttonError.color};
  }
`;

export default function ButtonError({ error, ...rest }: { error?: boolean } & ButtonProps) {
  if (error) {
    return <ButtonErrorStyle {...rest} />;
  } else {
    return <ButtonPrimary {...rest} />;
  }
}
