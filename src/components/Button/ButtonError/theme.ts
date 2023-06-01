import { ButtonErrorTheme } from "./types";
import { colors } from "../../../theme/colors";
import { darken } from "polished";

export const dark: ButtonErrorTheme = {
  color: colors.coralReef,
  focusColor: darken(0.05, colors.coralReef),
  activeColor: darken(0.1, colors.coralReef),
};

export const light: ButtonErrorTheme = {
  color: colors.deepCarminePink,
  focusColor: darken(0.05, colors.deepCarminePink),
  activeColor: darken(0.1, colors.deepCarminePink),
};
