import styled, { keyframes } from "styled-components";

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const StyledSVG = styled.svg<{ size: string }>`
  height: ${({ size }) => size};
  width: ${({ size }) => size};
  stroke: ${({ theme }) => theme.colors.primaryDefault};
`;

export const StyledRotatingSVG = styled(StyledSVG)<{ duration?: string }>`
  stroke: none !important;
  animation: ${({ duration }) => duration || "2s"} ${rotateAnimation} linear infinite;
`;
