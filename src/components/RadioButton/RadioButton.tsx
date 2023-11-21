import { useMemo } from "react";
import { RadioButtonLabel, RadioButtonWrapper } from './styles';
import { IRadioButtonProps } from './types'

export default function ({ value, name, onChange, children, ...props }: IRadioButtonProps) {
  const isActive = useMemo(() => value === name, [value, name]);

  return (
    <RadioButtonLabel disabled={props.disabled}>
      <RadioButtonWrapper
        {...props}
        onClick={() => {
          if (onChange && name) {
            onChange(name);
          }
        }}
        type="button"
        active={isActive}
        mr={"8px"}
      ></RadioButtonWrapper>
      {children || name}
    </RadioButtonLabel>
  );
}
