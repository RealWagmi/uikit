import styled from "styled-components";
import { BaseButton } from "../BaseButton";

const ButtonPrimary = styled(BaseButton)`
  background: ${({ theme }) => theme.buttonPrimary.color};
  font-size: 16px;
  font-weight: 600;
  padding: 16px;
  color: ${({ theme }) => theme.buttonPrimary.textColor};
  &:focus {
    box-shadow: 0 0 0 1pt ${({ theme }) => theme.buttonPrimary.focusColor};
    background: ${({ theme }) => theme.buttonPrimary.focusColor};
  }
  &:hover {
    background: ${({ theme }) => theme.buttonPrimary.focusColor};
  }
  &:active {
    box-shadow: 0 0 0 1pt ${({ theme }) => theme.buttonPrimary.activeColor};
    background: ${({ theme }) => theme.buttonPrimary.activeColor};
  }
  &:disabled {
    cursor: auto;
    box-shadow: none;
    border: 1px solid transparent;
    outline: none;
  }
`;

export default ButtonPrimary;
