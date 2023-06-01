import { Button as RebassButton, ButtonProps as ButtonPropsOriginal } from 'rebass/styled-components'
import styled from 'styled-components'
import { Box } from "../Box";

const Row = styled(Box)<{
  width?: string
  align?: string
  justify?: string
  padding?: string
  border?: string
  borderRadius?: string
  gap?: string
}>`
  width: ${({ width }) => width ?? '100%'};
  display: flex;
  align-items: ${({ align }) => align ?? 'center'};
  justify-content: ${({ justify }) => justify ?? 'flex-start'};
  padding: ${({ padding }) => padding};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
  gap: ${({ gap }) => gap};
`

export const RowBetween = styled(Row)`
  justify-content: space-between;
`

type ButtonProps = Omit<ButtonPropsOriginal, 'css'>

export const ButtonOverlay = styled.div`
  background-color: transparent;
  bottom: 0;
  border-radius: inherit;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 150ms ease background-color;
  width: 100%;
`

export type BaseButtonProps = {
  padding?: string
  width?: string
  $borderRadius?: string
  altDisabledStyle?: boolean
} & ButtonProps

export const BaseButton = styled(RebassButton)<BaseButtonProps>`
  padding: ${({ padding }) => padding ?? '16px'};
  width: ${({ width }) => width ?? '100%'};
  font-weight: 700;
  text-align: center;
  border-radius: ${({ theme }) => theme.btnBorderRadius};
  outline: none;

  color: ${({ theme }) => theme.textPrimary};
  text-decoration: none;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 1;
  font-family: 'Lexend Deca', sans-serif;

  &:disabled {
    opacity: 50%;
    cursor: auto;
    pointer-events: none;
  }

  will-change: transform;
  transition: transform 450ms ease;
  transform: perspective(1px) translateZ(0);

  > * {
    user-select: none;
  }

  > a {
    text-decoration: none;
  }
`
export enum ButtonSize {
  small,
  medium,
  large,
}
export enum ButtonEmphasis {
  high,
  promotional,
  highSoft,
  medium,
  low,
  warning,
  destructive,
}

