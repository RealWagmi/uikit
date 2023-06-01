import styled from "styled-components";
import { BaseButton } from "../BaseButton";

const ButtonGray = styled(BaseButton)`
  background-color: ${({ theme }) => theme.buttonGray.background};
  color: #c2a676;
  border: 2px solid #dcb97e;
  font-size: 16px;
  font-weight: 500;
  border-radius: 16px;

  &:active {
    background-color: ${({ theme, disabled }) => !disabled && theme.buttonGray.backgroundActive};
  }
`;

export default ButtonGray;
