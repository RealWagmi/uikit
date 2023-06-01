import { ButtonOutlinedTheme } from "./types";
import { colors } from "../../../theme/colors";
import { rgba } from "polished";

export const dark: ButtonOutlinedTheme = {
  border: rgba(colors.dimGray, 0.2),
  color: colors.white,
  hoverColor: colors.white,
  focusColor: colors.darkElectricBlue
};

export const light: ButtonOutlinedTheme = {
  border: colors.soap,
  color: colors.dimGray,
  hoverColor: colors.white,
  focusColor: colors.ceil
};
