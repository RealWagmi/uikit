import { BlueCardTheme } from "./types";
import { darkColors } from "../../../theme/colors";
import { rgba } from "polished";

export const dark: BlueCardTheme = {
  background: rgba(darkColors.indigo, 0.7),
  color: darkColors.white,
};

export const light: BlueCardTheme = {
  background: rgba(darkColors.indigo, 0.7),
  color: darkColors.white,
};
