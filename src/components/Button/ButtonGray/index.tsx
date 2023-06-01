import styled from "styled-components";
import { BaseButton } from "../BaseButton";
import { darken } from "polished";

const ButtonGray = styled(BaseButton)`
  background-color: ${({ theme }) => theme.btnBgColorSecond};
  color: #c2a676;
  border: 2px solid #dcb97e;
  font-size: 16px;
  font-weight: 500;
  border-radius: 16px;

  &:active {
    background-color: ${({ theme, disabled }) => !disabled && darken(0.1, theme.backgroundInteractive)};
  }
`;

export default ButtonGray;
