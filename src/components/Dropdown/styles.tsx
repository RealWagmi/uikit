import styled from "styled-components";
import { Box, Grid } from "../Box";
import { rgba } from "polished";
import { Z_INDEX } from "../../constants";

export const DropdownWrap = styled(Box)<{ height: string }>`
  width: max-content;
  position: relative;
  overflow: visible;
  z-index: ${Z_INDEX.DROPDOWN};
  height: ${({ height }) => height};
`;

export const DropdownContainer = styled(Grid)<{ maxHeight: number; opened?: boolean }>`
  width: 100%;
  max-height: ${({ maxHeight }) => maxHeight}px;
  padding: 0 0 4px;
  overflow: hidden;
  box-sizing: border-box;
  background: ${({ theme, opened }) =>
    !opened ? rgba(theme.colors.primaryDefault, 0.08) : rgba(theme.colors.strokeGray, 0.16)};
  outline: 0.5px solid ${({ theme }) => rgba(theme.colors.strokeGray, 0.2)};
  outline-offset: -0.5px;
  border-radius: 12px;
  backdrop-filter: blur(10px);

  & svg.dropdown-svg {
    transform: rotate(${({ opened }) => (opened ? "180deg" : "0")});
    stroke: ${({ theme, opened }) => (!opened ? theme.colors.textGray : theme.colors.white)};

    transition: all 0.15s;
  }

  &:hover {
    background: ${({ theme }) => rgba(theme.colors.strokeGray, 0.16)};

    & svg.dropdown-svg {
      stroke: ${({ theme }) => theme.colors.white};
    }
  }

  transition: max-height 0.15s, background 0.2s;
`;

export const DropdownItemWrapper = styled.button<{ active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px 0 20px;
  height: 26px;
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  cursor: pointer;
  color: ${({ theme, active }) => (active ? theme.colors.primaryDefault : theme.colors.textGray)};
  background: transparent;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.primaryDefault};
  }

  transition: color 0.15s;
`;

export const DropdownActivatorWrapper = styled(DropdownItemWrapper)`
  height: 34px;
  padding: 0 20px;
`;
