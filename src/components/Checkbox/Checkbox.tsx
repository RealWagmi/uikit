import { ICheckboxProps } from './types';
import { CheckboxWrapper } from './styles';

export default function ({ value, onChange, ...props }: ICheckboxProps) {
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
