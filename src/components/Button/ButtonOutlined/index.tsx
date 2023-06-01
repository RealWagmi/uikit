import styled from "styled-components";
import { BaseButton } from "../BaseButton";

const ButtonOutlined = styled(BaseButton)`
  border: 1px solid ${({ theme }) => theme.buttonOutlined.border};
  background-color: transparent;
  color: ${({ theme }) => theme.buttonOutlined.color};
  &:focus {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.buttonOutlined.focusColor};
  }
  &:hover {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.buttonOutlined.hoverColor};
  }
  &:active {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.buttonOutlined.focusColor};
  }
  &:disabled {
    opacity: 50%;
    cursor: auto;
  }
`;

export default ButtonOutlined;
