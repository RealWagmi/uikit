import { ButtonConfirmedTheme } from "./types";
import { colors } from "../../../theme/colors";

export const dark: ButtonConfirmedTheme = {
  background: colors.policeBlue,
  color: colors.white,
  backgroundDisabled: colors.chineseBlack,
  colorDisabled: colors.dimGray,
};

export const light: ButtonConfirmedTheme = {
  background: colors.lightSteelBlue,
  color: colors.dimGray,
  backgroundDisabled: colors.lavender,
  colorDisabled: colors.dimGray,
};
