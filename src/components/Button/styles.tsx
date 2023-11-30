import styled, { keyframes } from "styled-components";
import { ButtonProps } from "./types";
import { layout, space, variant } from "styled-system";
import { variantVariants, scaleVariants } from "./theme";

export const ButtonWrapper = styled.button.withConfig({
  shouldForwardProp: (prop: string) => !["endIcon", "startIcon"].includes(prop),
} as any)<ButtonProps>`
  ${layout}
  ${space}
  
  ${({ theme, color }) =>
    variant({
      prop: "variant",
      variants: variantVariants(theme, color),
    })}
  ${variant({
    prop: "scale",
    variants: scaleVariants,
  })}
  
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: none;
  cursor: pointer;
  text-decoration: none;

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
`;

export const ButtonContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.15s;
`;

export const loadingDotsAnimation = keyframes`
  0% {
    content: ".";
  }
  33% {
    content: "..";
  }
  66% {
    content: "...";
  }
  100% {
    content: ".";
  }
`;

export const ButtonContent = styled.span.withConfig({
  shouldForwardProp: (prop: string) => !["loading"].includes(prop),
} as any)<{ loading?: boolean }>`
  position: relative;
  margin: 0 12px;

  &:after {
    display: ${({ loading }) => (loading ? "block" : "none")};
    content: ".";
    position: absolute;
    left: 100%;
    bottom: 0;
    animation: ${loadingDotsAnimation} 0.6s infinite;
  }
`;
