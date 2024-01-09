import styled from "styled-components";
import { position, PositionProps, space, SpaceProps } from "styled-system";
import { HTMLAttributes } from "react";

interface GradientWrapProps extends PositionProps, SpaceProps, HTMLAttributes<HTMLElement> {}

const GradientWrap = styled.div<GradientWrapProps>`
  display: inline-flex;
  position: relative;
  background: ${({ theme }) => theme.primaryDarkGradient};
  padding: 6px 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  border-radius: 12px;
  
  &:before {
    content: "";
    position: absolute;
    top: -1px;
    left: -1px;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    border-radius: inherit;
    z-index: -1;
    background: ${({ theme }) => theme.primaryGradient};
  }
  
  ${position}
  ${space}
`;

export default GradientWrap;
