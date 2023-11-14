import styled from "styled-components";
import { ButtonProps } from './types';
import { layout, space, variant } from "styled-system";
import { variantVariants, scaleVariants } from "./theme";

export const ButtonWrapper = styled.button<ButtonProps>`
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
  
  position: relative;
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

export const ButtonContainer = styled.span<{ isLoading?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ isLoading }) => (isLoading ? 0.3 : 1)};
  transition: opacity 0.15s;
`;
export const ButtonLoader = styled.span<{ isLoading?: boolean }>`
  position: absolute;
  display: flex;
  opacity: ${({ isLoading }) => (isLoading ? 1 : 0)};
  pointer-events: none;
  transition: opacity 0.15s;
`;

export const ButtonContent = styled.span`
  margin: 0 8px;
`;