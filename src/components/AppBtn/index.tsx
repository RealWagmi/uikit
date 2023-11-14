import styled from "styled-components";
import { layout, space, variant } from "styled-system";
import { variantVariants, scaleVariants } from "./theme";
import { AppBtnProps } from "./types";
import LoadingSpinner from "../Loaders/LoadingSpinner";

const AppBtnWrap = styled.button<AppBtnProps>`
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

const AppBtnContainer = styled.span<{ isLoading?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ isLoading }) => (isLoading ? 0.3 : 1)};
  transition: opacity 0.15s;
`;
const AppBtnLoader = styled.span<{ isLoading?: boolean }>`
  position: absolute;
  display: flex;
  opacity: ${({ isLoading }) => (isLoading ? 1 : 0)};
  pointer-events: none;
  transition: opacity 0.15s;
`;

const AppBtnContent = styled.span`
  margin: 0 8px;
`;

AppBtnWrap.defaultProps = {
  variant: "default",
  scale: "default",
  color: "primary",
  as: "button",
  width: "100%",
};

export default function AppBtn({
  loading,
  onClick,
  ...props
}: AppBtnProps & { loading?: boolean; onClick?: () => void }) {
  return (
    <AppBtnWrap
      {...props}
      as={props.to ? "a" : "button"}
      href={props.to}
      onClick={(e: any) => {
        if (loading || props.disabled) e.preventDefault();
        else if (onClick) onClick();
      }}
    >
      <AppBtnContainer isLoading={loading}>
        {props.startIcon}
        <AppBtnContent>{props.children}</AppBtnContent>
        {props.endIcon}
      </AppBtnContainer>
      <AppBtnLoader isLoading={loading}>
        <LoadingSpinner duration={"0.4s"} />
      </AppBtnLoader>
    </AppBtnWrap>
  );
}
