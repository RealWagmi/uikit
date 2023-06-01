import styled from "styled-components";
import { BaseButton } from "../BaseButton";

const ButtonSecondary = styled(BaseButton)`
  border: 1px solid ${({ theme }) => theme.buttonSecondary.primaryColor};
  color: ${({ theme }) => theme.buttonSecondary.color};
  background-color: transparent;
  font-size: 16px;
  border-radius: 12px;
  padding: ${({ padding }) => (padding ? padding : "10px")};

  &:focus {
    box-shadow: 0 0 0 1pt ${({ theme }) => theme.buttonSecondary.primaryColor};
    border: 1px solid ${({ theme }) => theme.buttonSecondary.secondaryColor};
  }
  &:hover {
    border: 1px solid ${({ theme }) => theme.buttonSecondary.secondaryColor};
  }
  &:active {
    box-shadow: 0 0 0 1pt ${({ theme }) => theme.buttonSecondary.primaryColor};
    border: 1px solid ${({ theme }) => theme.buttonSecondary.secondaryColor};
  }
  &:disabled {
    opacity: 50%;
    cursor: auto;
  }
  a:hover {
    text-decoration: none;
  }
`;

export default ButtonSecondary;
