import { TableTheme } from "./types";
import { darkColors } from "../../theme/colors";
import { rgba } from "polished";

export const dark: TableTheme = {
  background: rgba(darkColors.dimGray, 0.2),
  activeBackground: rgba(darkColors.dimGray, 0.1),
  border: rgba(darkColors.auroMetalSaurus, 0.2),
  titleColor: darkColors.white,
  scrollbarTrack: darkColors.dimGray,
  scrollbarThumb: darkColors.lightFrenchBeige,
  secondColor: darkColors.gray,
  color: darkColors.dimGray,
  activeColor: darkColors.lightFrenchBeige,
};
