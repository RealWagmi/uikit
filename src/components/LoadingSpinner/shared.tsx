import styled, { css, keyframes } from "styled-components";

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const RotationStyle = css`
  animation: 2s ${rotateAnimation} linear infinite;
`;

export const StyledSVG = styled.svg<{ size: string }>`
  height: ${({ size }) => size};
  width: ${({ size }) => size};
  stroke: ${({ theme }) => theme.colors.primaryDefault};
`;

export const StyledRotatingSVG = styled(StyledSVG)`
  ${RotationStyle}
`;
