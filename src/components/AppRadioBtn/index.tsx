import styled from "styled-components";
import { layout, LayoutProps, space, SpaceProps } from "styled-system";
import { ReactNode, useMemo } from "react";

interface IProps extends LayoutProps, SpaceProps {
  value?: string | number;
  name?: string | number;
  onChange?: (value: string | number) => void;
  disabled?: boolean;
  children?: ReactNode;
}

const AppRadioBtnLabel = styled.label<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  user-select: none;
  color: ${({ theme, disabled }) => (disabled ? theme.colors.gray : theme.colors.textGray)};
  font-size: 14px;
  font-weight: 300;
  line-height: 18px;
`;

const AppRadioBtnWrap = styled.button<
  IProps & {
    active?: boolean;
  }
>`
  ${layout}
  ${space}

  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  outline-offset: -1px;
  border-radius: 8px;
  border: none;
  background: transparent;
  cursor: pointer;
  outline: 1px solid ${({ theme }) => theme.colors.primaryDefault};

  &:after {
    content: "";
    position: absolute;
    width: ${({ active }) => (active ? "8px" : 0)};
    height: ${({ active }) => (active ? "8px" : 0)};
    background: ${({ theme }) => theme.colors.primaryDefault};
    border-radius: 4px;
    transition: background 0.2s, width 0.05s, height 0.05s;
  }

  &:hover:not(&:disabled) {
    outline: 1px solid ${({ theme }) => theme.colors.neutralLight};

    &:after {
      background: ${({ theme }) => theme.colors.neutralLight};
    }
  }

  &:disabled {
    outline: 1px solid ${({ theme }) => theme.colors.gray};
    cursor: default;

    &:after {
      background: ${({ theme }) => theme.colors.gray};
      cursor: default;
    }
  }

  transition: outline-color 0.2s;
`;

export default function AppRadioBtn({ value, name, onChange, children, ...props }: IProps) {
  const isActive = useMemo(() => value === name, [value, name]);

  return (
    <AppRadioBtnLabel disabled={props.disabled}>
      <AppRadioBtnWrap
        {...props}
        onClick={() => {
          if (onChange && name) {
            onChange(name);
          }
        }}
        type="button"
        active={isActive}
        mr={"8px"}
      ></AppRadioBtnWrap>
      {children || name}
    </AppRadioBtnLabel>
  );
}
