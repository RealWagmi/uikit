import { ButtonGrayTheme } from "./types";
import { colors } from "../../../theme/colors";
import { darken, rgba } from "polished";

export const dark: ButtonGrayTheme = {
  background: rgba(colors.dimGray, 0.2),
  backgroundActive: darken(0.1, colors.chineseBlack)
};

export const light: ButtonGrayTheme = {
  background: rgba(colors.dimGray, 0.08),
  backgroundActive: darken(0.1, colors.lavender)
};
