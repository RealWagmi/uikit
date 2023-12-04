import { ButtonProps } from "./types";
import { ButtonContainer, ButtonContent, ButtonWrapper } from "./styles";
import { MouseEventHandler, memo } from "react";

ButtonWrapper.defaultProps = {
  variant: "default",
  scale: "default",
  color: "primary",
  as: "button",
  width: "100%",
};

function Button({
  loading,
  onClick,
  ...props
}: ButtonProps & { loading?: boolean; onClick?: MouseEventHandler<any> }) {
  return (
    <ButtonWrapper
      {...props}
      as={props.to && !loading && !props.disabled ? "a" : "button"}
      href={props.to}
      onClick={(e: any) => {
        if (!props.disabled && !loading && onClick) onClick(e);
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

export default memo(Button)
