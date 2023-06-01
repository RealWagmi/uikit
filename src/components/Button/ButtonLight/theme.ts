import { ButtonLightTheme } from "./types";
import { colors } from "../../../theme/colors";
import { rgba } from "polished";

export const dark: ButtonLightTheme = {
  color: colors.richBlack,
  focusColor: rgba(colors.lightFrenchBeige, 0.24),
  hoverOverlayColor: rgba(colors.ceil, 0.08),
  activeOverlayColor: rgba(colors.lightSteelBlue, 0.24),
};

export const light: ButtonLightTheme = {
  color: colors.richBlack,
  focusColor: rgba(colors.deepPink, 0.12),
  hoverOverlayColor: rgba(colors.ceil, 0.08),
  activeOverlayColor: rgba(colors.lightSteelBlue, 0.24),
};
