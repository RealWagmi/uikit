import { IToggleProps } from './types';
import { ToggleWrapper, ToggleCircle } from './styles';

export default function ({ value, onChange, ...props }: IToggleProps) {
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
