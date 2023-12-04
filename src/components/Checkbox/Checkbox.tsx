import { ICheckboxProps } from "./types";
import { CheckboxWrapper } from "./styles";
import { memo } from "react";

function Checkbox({ value, onChange, ...props }: ICheckboxProps) {
  return (
    <CheckboxWrapper
      {...props}
      onClick={() => {
        if (onChange) onChange(!value);
      }}
      type="button"
      active={!!value}
    ></CheckboxWrapper>
  );
}

export default memo(Checkbox);
