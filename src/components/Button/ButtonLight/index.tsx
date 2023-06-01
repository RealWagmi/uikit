import styled from "styled-components";
import { BaseButton, BaseButtonProps, ButtonOverlay } from "../BaseButton";

const BaseButtonLight = styled(BaseButton)`
  background: ${({ theme }) => theme.btnPrimaryBackground};
  color: ${({ theme }) => theme.btnPrimaryColor};
  font-size: 16px;
  font-weight: 600;

  &:focus {
    box-shadow: 0 0 0 1pt ${({ theme, disabled }) => !disabled && theme.accentActionSoft};
    background-color: ${({ theme, disabled }) => !disabled && theme.accentActionSoft};
  }
  &:hover {
    background-color: ${({ theme, disabled }) => !disabled && theme.accentActionSoft};
  }
  &:active {
    box-shadow: 0 0 0 1pt ${({ theme, disabled }) => !disabled && theme.accentActionSoft};
    background-color: ${({ theme, disabled }) => !disabled && theme.accentActionSoft};
  }

  :hover {
    ${ButtonOverlay} {
      background-color: ${({ theme }) => theme.stateOverlayHover};
    }
  }

  :active {
    ${ButtonOverlay} {
      background-color: ${({ theme }) => theme.stateOverlayPressed};
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
