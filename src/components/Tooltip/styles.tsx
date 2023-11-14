import styled from "styled-components";
import { transparentize } from "polished";

export const Arrow = styled.div`
  width: 8px;
  height: 8px;

  ::before {
    position: absolute;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    content: "";
    transform: rotate(45deg);
    background: ${({ theme }) => theme.colors.strokeGray};
  }

  &.arrow-top {
    bottom: -4px;
  }

  &.arrow-bottom {
    top: -4px;
  }

  &.arrow-left {
    right: -4px;
  }

  &.arrow-right {
    left: -4px;
  }
`;

export const TooltipContainer = styled.div<{ show: boolean }>`
  pointer-events: none;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: visibility 150ms linear, opacity 150ms linear;
  max-width: 256px;
  cursor: default;
  padding: 0.6rem 1rem;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  word-break: break-word;
  background: ${({ theme }) => theme.colors.strokeGray};
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  border-radius: 12px;
  box-shadow: 0 4px 8px 0 ${({ theme }) => transparentize(0.9, theme.colors.white)};
`;