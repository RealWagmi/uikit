import styled, { keyframes } from "styled-components";
import { lighten } from "polished";

type IProps = {
  height?: string;
  width?: string;
  round?: boolean;
  delay?: string;
  margin?: string;
};

export const loadingAnimation = keyframes`
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
`;

const LoadingBubble = styled.div<IProps>`
  border-radius: ${({ round }) => (round ? "50%" : "12px")};
  ${({ margin }) => margin && `margin: ${margin}`};
  height: ${({ height }) => height ?? "24px"};
  width: ${({ width }) => width ?? "50%"};
  animation: ${loadingAnimation} 1.5s infinite;
  ${({ delay }) => delay && `animation-delay: ${delay};`}
  animation-fill-mode: both;
  background: linear-gradient(
    to left,
    ${({ theme }) => theme.background} 25%,
    ${({ theme }) => lighten(0.075, theme.background)} 50%,
    ${({ theme }) => theme.background} 75%
  );
  will-change: background-position;
  background-size: 400%;
`;

export default LoadingBubble;
