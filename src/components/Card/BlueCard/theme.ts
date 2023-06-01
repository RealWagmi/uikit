import { BlueCardTheme } from "./types";
import { colors } from "../../../theme/colors";
import { rgba } from "polished";

export const dark: BlueCardTheme = {
  background: rgba(colors.indigo, 0.7),
  color: colors.white,
};

export const light: BlueCardTheme = {
  background: rgba(colors.indigo, 0.7),
  color: colors.white,
};
