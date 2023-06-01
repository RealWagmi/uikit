import { ButtonEmphasis, ButtonOverlay, ButtonSize } from "../BaseButton";
import styled, { DefaultTheme } from "styled-components";

interface BaseThemeButtonProps {
  size: ButtonSize;
  emphasis: ButtonEmphasis;
}

interface ThemeButtonProps extends React.ComponentPropsWithoutRef<"button">, BaseThemeButtonProps {}

function pickThemeButtonBackgroundColor({ theme, emphasis }: { theme: DefaultTheme; emphasis: ButtonEmphasis }) {
  switch (emphasis) {
    case ButtonEmphasis.high:
      return theme.themeButton.highBackground;
    case ButtonEmphasis.promotional:
      return theme.themeButton.promotionalBackground;
    case ButtonEmphasis.highSoft:
      return theme.themeButton.highSoftBackground;
    case ButtonEmphasis.low:
      return "transparent";
    case ButtonEmphasis.warning:
      return theme.themeButton.warningBackground;
    case ButtonEmphasis.destructive:
      return theme.themeButton.destructiveBackground;
    case ButtonEmphasis.medium:
    default:
      return theme.themeButton.defaultBackground;
  }
}
function pickThemeButtonFontSize({ size }: { size: ButtonSize }) {
  switch (size) {
    case ButtonSize.large:
      return "20px";
    case ButtonSize.medium:
      return "16px";
    case ButtonSize.small:
      return "14px";
    default:
      return "16px";
  }
}
function pickThemeButtonLineHeight({ size }: { size: ButtonSize }) {
  switch (size) {
    case ButtonSize.large:
      return "24px";
    case ButtonSize.medium:
      return "20px";
    case ButtonSize.small:
      return "16px";
    default:
      return "20px";
  }
}
function pickThemeButtonPadding({ size }: { size: ButtonSize }) {
  switch (size) {
    case ButtonSize.large:
      return "16px";
    case ButtonSize.medium:
      return "10px 12px";
    case ButtonSize.small:
      return "8px";
    default:
      return "10px 12px";
  }
}
function pickThemeButtonTextColor({ theme, emphasis }: { theme: DefaultTheme; emphasis: ButtonEmphasis }) {
  switch (emphasis) {
    case ButtonEmphasis.high:
    case ButtonEmphasis.promotional:
      return theme.themeButton.promotional;
    case ButtonEmphasis.highSoft:
      return theme.themeButton.highSoft;
    case ButtonEmphasis.low:
      return theme.themeButton.low;
    case ButtonEmphasis.warning:
      return theme.themeButton.warning;
    case ButtonEmphasis.destructive:
      return theme.themeButton.destructive;
    case ButtonEmphasis.medium:
    default:
      return theme.themeButton.default;
  }
}

const BaseThemeButton = styled.button<BaseThemeButtonProps>`
  align-items: center;
  background-color: ${pickThemeButtonBackgroundColor};
  border-radius: 16px;
  border: 0;
  color: ${pickThemeButtonTextColor};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  font-size: ${pickThemeButtonFontSize};
  font-weight: 600;
  gap: 12px;
  justify-content: center;
  line-height: ${pickThemeButtonLineHeight};
  padding: ${pickThemeButtonPadding};
  position: relative;
  transition: 150ms ease opacity;
  user-select: none;

  :active {
    ${ButtonOverlay} {
      background-color: ${({ theme }) => theme.themeButton.activeColor};
    }
  }
  :focus {
    ${ButtonOverlay} {
      background-color: ${({ theme }) => theme.themeButton.activeColor};
    }
  }
  :hover {
    ${ButtonOverlay} {
      background-color: ${({ theme }) => theme.themeButton.hoverColor};
    }
  }
  :disabled {
    cursor: default;
    opacity: 0.6;
  }
  :disabled:active,
  :disabled:focus,
  :disabled:hover {
    ${ButtonOverlay} {
      background-color: transparent;
    }
  }
`;
const ThemeButton = ({ children, ...rest }: ThemeButtonProps) => {
  return (
    <BaseThemeButton {...rest}>
      <ButtonOverlay />
      {children}
    </BaseThemeButton>
  );
};

export default ThemeButton;
