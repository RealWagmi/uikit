import styled from "styled-components";
import { BaseButton, BaseButtonProps, ButtonOverlay } from "../BaseButton";

const BaseButtonLight = styled(BaseButton)`
  background: linear-gradient(90.52deg, #DDC194 0%, #9A7D49 100%);;
  color: ${({ theme }) => theme.buttonLight.color};
  font-size: 16px;
  font-weight: 600;

  &:focus {
    box-shadow: 0 0 0 1pt ${({ theme, disabled }) => !disabled && theme.buttonLight.focusColor};
    background-color: ${({ theme, disabled }) => !disabled && theme.buttonLight.focusColor};
  }
  &:hover {
    background-color: ${({ theme, disabled }) => !disabled && theme.buttonLight.focusColor};
  }
  &:active {
    box-shadow: 0 0 0 1pt ${({ theme, disabled }) => !disabled && theme.buttonLight.focusColor};
    background-color: ${({ theme, disabled }) => !disabled && theme.buttonLight.focusColor};
  }

  :hover {
    ${ButtonOverlay} {
      background-color: ${({ theme }) => theme.buttonLight.hoverOverlayColor};
    }
  }

  :active {
    ${ButtonOverlay} {
      background-color: ${({ theme }) => theme.buttonLight.activeOverlayColor};
    }
  }

  :disabled {
    opacity: 0.4;
    :hover {
      cursor: auto;
      background-color: transparent;
      box-shadow: none;
      border: 1px solid transparent;
      outline: none;
    }
  }
`;

const ButtonLight = ({ children, ...rest }: BaseButtonProps) => {
  return (
    <BaseButtonLight {...rest}>
      <ButtonOverlay />
      {children}
    </BaseButtonLight>
  );
};

export default ButtonLight;
