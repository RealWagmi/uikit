import styled from "styled-components";
import { darken } from "polished";
import { BaseButton } from "../BaseButton";

const ButtonPrimary = styled(BaseButton)`
  background: ${({ theme }) => theme.accentAction};
  font-size: 16px;
  font-weight: 600;
  padding: 16px;
  color: ${({ theme }) => theme.accentTextLightPrimary};
  &:focus {
    box-shadow: 0 0 0 1pt ${({ theme }) => darken(0.05, theme.accentAction)};
    background: ${({ theme }) => darken(0.05, theme.accentAction)};
  }
  &:hover {
    background: ${({ theme }) => darken(0.05, theme.accentAction)};
  }
  &:active {
    box-shadow: 0 0 0 1pt ${({ theme }) => darken(0.1, theme.accentAction)};
    background: ${({ theme }) => darken(0.1, theme.accentAction)};
  }
  &:disabled {
    cursor: auto;
    box-shadow: none;
    border: 1px solid transparent;
    outline: none;
  }
`;

export default ButtonPrimary;
