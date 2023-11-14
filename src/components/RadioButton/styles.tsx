import styled from "styled-components";
import { IRadioButtonProps } from './types';
import { layout, space } from "styled-system";

export const RadioButtonLabel = styled.label<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  user-select: none;
  color: ${({ theme, disabled }) => (disabled ? theme.colors.gray : theme.colors.textGray)};
  font-size: 14px;
  font-weight: 300;
  line-height: 18px;
`;

export const RadioButtonWrapper = styled.button<
IRadioButtonProps & {
    active?: boolean;
  }
>`
  ${layout}
  ${space}

  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  outline-offset: -1px;
  border-radius: 8px;
  border: none;
  background: transparent;
  cursor: pointer;
  outline: 1px solid ${({ theme }) => theme.colors.primaryDefault};

  &:after {
    content: "";
    position: absolute;
    width: ${({ active }) => (active ? "8px" : 0)};
    height: ${({ active }) => (active ? "8px" : 0)};
    background: ${({ theme }) => theme.colors.primaryDefault};
    border-radius: 4px;
    transition: background 0.2s, width 0.05s, height 0.05s;
  }

  &:hover:not(:disabled) {
    outline: 1px solid ${({ theme }) => theme.colors.neutralLight};

    &:after {
      background: ${({ theme }) => theme.colors.neutralLight};
    }
  }

  &:disabled {
    outline: 1px solid ${({ theme }) => theme.colors.gray};
    cursor: default;

    &:after {
      background: ${({ theme }) => theme.colors.gray};
      cursor: default;
    }
  }

  transition: outline-color 0.2s;
`;