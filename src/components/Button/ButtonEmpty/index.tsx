import styled from "styled-components";
import { BaseButton } from "../BaseButton";

const ButtonEmpty = styled(BaseButton)`
  background-color: transparent;
  color: ${({ theme }) => theme.buttonEmpty.color};
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    text-decoration: underline;
  }
  &:hover {
    text-decoration: none;
  }
  &:active {
    text-decoration: none;
  }
  &:disabled {
    opacity: 50%;
    cursor: auto;
  }
`;

export default ButtonEmpty;
