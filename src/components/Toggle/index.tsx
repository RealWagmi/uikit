import styled from "styled-components";
import { layout, LayoutProps, space, SpaceProps } from "styled-system";

interface IProps extends LayoutProps, SpaceProps {
  value?: boolean;
  onChange?: (value: boolean) => void;
  disabled?: boolean;
}

const AppToggleWrap = styled.button<
  IProps & {
    active?: boolean;
  }
>`
  ${layout}
  ${space}
  
  position: relative;
  width: 36px;
  height: 20px;
  background: ${({ theme, active }) => (active ? theme.colors.primaryDefault : theme.colors.blueGray)};
  cursor: pointer;
  border-radius: 20px;
  padding: 2px;
  border: none;
  outline: none;
  transition: background 0.2s;

  &:hover:not(:disabled) {
    background: ${({ theme, active }) => (active ? theme.colors.primaryHovered : theme.colors.blueGrayLight)};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.gray};
    cursor: default;
  }
`;

const AppToggleCircle = styled.span<{ active: boolean }>`
  position: absolute;
  top: 2px;
  left: ${({ active }) => (active ? "calc(100% - 18px)" : "2px")};
  width: 16px;
  height: 16px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: inherit;
  transition: left 0.2s, background 0.2s;
`;

export default function Toggle({ value, onChange, ...props }: IProps) {
  return (
    <AppToggleWrap
      {...props}
      onClick={() => {
        if (onChange) onChange(!value);
      }}
      type="button"
      active={!!value}
    >
      <AppToggleCircle active={!!value} />
    </AppToggleWrap>
  );
}
