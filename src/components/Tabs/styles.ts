import styled from "styled-components";
import { Flex } from "../Box";
import { rgba } from "polished";

export const TabsWrap = styled(Flex)`
  display: inline-flex;
  box-shadow: 0 2px 16px -4px ${({ theme }) => rgba(theme.colors.shadowDark, 0.04)};
  outline: 1px solid ${({ theme }) => rgba(theme.colors.strokeGray, 0.2)};
  outline-offset: -1px;
  background: ${({ theme }) => rgba(theme.colors.strokeGray, 0.08)};
  border-radius: 32px;
  padding: 5px 10px;
`;

export const TabWrap = styled.button<{ active?: boolean }>`
  padding: 10px;
  border: none;
  border-radius: 32px;
  font-size: 16px;
  font-weight: 400;
  line-height: 11px;
  min-width: 62px;
  cursor: pointer;
  outline: none;

  background: ${({ theme, active }) => (active ? rgba(theme.colors.textGray, 0.08) : "transparent")};
  color: ${({ theme, active }) => (active ? theme.colors.primaryDefault : theme.colors.darkGray)};

  &:not(:last-child) {
    margin-right: 16px;
  }

  &:hover,
  &:focus {
    background: ${({ theme }) => rgba(theme.colors.textGray, 0.08)};
  }

  transition: background 0.2s;
`;