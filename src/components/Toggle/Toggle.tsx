import { IToggleProps } from "./types";
import { ToggleWrapper, ToggleCircle } from "./styles";
import { memo } from "react";

function Toggle({ value, onChange, ...props }: IToggleProps) {
  return (
    <ToggleWrapper
      {...props}
      onClick={() => {
        if (onChange) onChange(!value);
      }}
      type="button"
      active={!!value}
    >
      <ToggleCircle active={!!value} />
    </ToggleWrapper>
  );
}

export default memo(Toggle);
