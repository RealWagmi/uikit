import { ButtonProps } from "./types";
import LoadingSpinner from "../Loaders/LoadingSpinner";
import { ButtonContainer, ButtonContent, ButtonLoader, ButtonWrapper } from './styles';

ButtonWrapper.defaultProps = {
  variant: "default",
  scale: "default",
  color: "primary",
  as: "button",
  width: "100%",
};

export default function ({
  loading,
  onClick,
  ...props
}: ButtonProps & { loading?: boolean; onClick?: () => void }) {
  return (
    <ButtonWrapper
      {...props}
      as={props.to ? "a" : "button"}
      href={props.to}
      onClick={(e: any) => {
        if (loading || props.disabled) e.preventDefault();
        else if (onClick) onClick();
      }}
    >
      <ButtonContainer isLoading={loading}>
        {props.startIcon}
        <ButtonContent>{props.children}</ButtonContent>
        {props.endIcon}
      </ButtonContainer>
      <ButtonLoader isLoading={loading}>
        <LoadingSpinner duration={"0.4s"} />
      </ButtonLoader>
    </ButtonWrapper>
  );
}
