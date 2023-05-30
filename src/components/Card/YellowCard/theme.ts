import { YellowCardTheme } from "./types";
import { darkColors } from "../../../theme/colors";
import { rgba } from "polished";

export const dark: YellowCardTheme = {
  background: rgba(darkColors.princetonOrange, 0.05),
  color: darkColors.violinBrown,
};
export const light: YellowCardTheme = {
  background: rgba(darkColors.princetonOrange, 0.05),
  color: darkColors.violinBrown,
};
