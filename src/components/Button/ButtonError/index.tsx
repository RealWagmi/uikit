import { ButtonProps } from "rebass";
import styled from "styled-components";
import { darken } from "polished";
import { BaseButton } from "../BaseButton";
import ButtonPrimary from "../ButtonPrimary";

const ButtonErrorStyle = styled(BaseButton)`
  background-color: ${({ theme }) => theme.accentFailure};
  border: 1px solid ${({ theme }) => theme.accentFailure};

  &:focus {
    box-shadow: 0 0 0 1pt ${({ theme }) => darken(0.05, theme.accentFailure)};
    background-color: ${({ theme }) => darken(0.05, theme.accentFailure)};
  }
  &:hover {
    background-color: ${({ theme }) => darken(0.05, theme.accentFailure)};
  }
  &:active {
    box-shadow: 0 0 0 1pt ${({ theme }) => darken(0.1, theme.accentFailure)};
    background-color: ${({ theme }) => darken(0.1, theme.accentFailure)};
  }
  &:disabled {
    opacity: 50%;
    cursor: auto;
    box-shadow: none;
    background-color: ${({ theme }) => theme.accentFailure};
    border: 1px solid ${({ theme }) => theme.accentFailure};
  }
`;

export default function ButtonError({ error, ...rest }: { error?: boolean } & ButtonProps) {
  if (error) {
    return <ButtonErrorStyle {...rest} />;
  } else {
    return <ButtonPrimary {...rest} />;
  }
}
