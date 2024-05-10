import styled from "styled-components";
import { Z_INDEX } from "../../constants";

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
    background: ${({ theme }) => theme.colors.darkBg};
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
  padding: 6px 8px;
  color: ${({ theme }) => theme.colors.textGray};

  font-size: 14px;
  font-weight: 300;
  line-height: 18px;

  word-break: break-word;
  background: ${({ theme }) => theme.colors.darkBg};
  border-radius: 8px;
  
  z-index: ${Z_INDEX.tooltip};
`;
