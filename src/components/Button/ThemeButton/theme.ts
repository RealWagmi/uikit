import { ThemeButtonTheme } from "./types";
import { colors } from "../../../theme/colors";
import { rgba } from "polished";

export const dark: ThemeButtonTheme = {
  highBackground: colors.dimGray,
  promotionalBackground: rgba(colors.lightFrenchBeige, 0.24),
  highSoftBackground: rgba(colors.lightFrenchBeige, 0.24),
  warningBackground: rgba(colors.spanishYellow, 0.24),
  destructiveBackground: colors.coralReef,
  defaultBackground: colors.chineseBlack,

  promotional: colors.dimGray,
  highSoft: colors.dimGray,
  low: colors.dimGray,
  warning: colors.spanishYellow,
  destructive: rgba(colors.vulcan, 0.8),
  default: colors.white,

  activeColor: rgba(colors.lightSteelBlue, 0.24),
  hoverColor: rgba(colors.ceil, 0.08),
};

export const light: ThemeButtonTheme = {
  highBackground: colors.lightFrenchBeige,
  promotionalBackground: rgba(colors.deepPink, 0.12),
  highSoftBackground: rgba(colors.deepPink, 0.12),
  warningBackground: rgba(colors.philippineGold, 0.24),
  destructiveBackground: colors.deepCarminePink,
  defaultBackground: colors.lavender,

  promotional: colors.lightFrenchBeige,
  highSoft: colors.lightFrenchBeige,
  low: colors.dimGray,
  warning: colors.philippineGold,
  destructive: rgba(colors.vulcan, 0.8),
  default: colors.dimGray,

  activeColor: rgba(colors.lightSteelBlue, 0.24),
  hoverColor: rgba(colors.ceil, 0.08),
};
