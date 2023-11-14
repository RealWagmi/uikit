import styled from "styled-components";
import { ICheckboxProps } from './types';
import { layout, space } from "styled-system";

export const CheckboxWrapper = styled.button<
  ICheckboxProps & {
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
  border-radius: 4px;
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
    border-radius: 2px;
    transition: background 0.2s, width 0.05s, height 0.05s;
  }

  &:hover:not(:disabled) {
    outline: 1px solid ${({ theme }) => theme.colors.primaryHovered};

    &:after {
      background: ${({ theme }) => theme.colors.primaryHovered};
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