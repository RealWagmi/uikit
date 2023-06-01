import { ButtonPrimaryTheme } from "./types";
import { colors } from "../../../theme/colors";
import { darken } from "polished";

export const dark: ButtonPrimaryTheme = {
  color: colors.lightFrenchBeige,
  textColor: colors.ghostWhite,
  focusColor: darken(0.05, colors.lightFrenchBeige),
  activeColor: darken(0.1, colors.lightFrenchBeige),
};

export const light: ButtonPrimaryTheme = {
  color: colors.dimGray,
  textColor: colors.ghostWhite,
  focusColor: darken(0.05, colors.dimGray),
  activeColor: darken(0.1, colors.dimGray),
};
