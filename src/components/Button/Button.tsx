import { ButtonProps } from "./types";
import { ButtonContainer, ButtonContent, ButtonWrapper } from "./styles";

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
}: ButtonProps & { loading?: boolean; onClick?: (e: MouseEvent) => void }) {
  return (
    <ButtonWrapper
      {...props}
      as={props.to ? "a" : "button"}
      href={props.to}
      onClick={(e: any) => {
        if (loading || props.disabled) e.preventDefault();
        else if (onClick) onClick(e);
      }}
    >
      <ButtonContainer>
        {props.startIcon}
        <ButtonContent loading={loading}>{props.children}</ButtonContent>
        {props.endIcon}
      </ButtonContainer>
    </ButtonWrapper>
  );
}
