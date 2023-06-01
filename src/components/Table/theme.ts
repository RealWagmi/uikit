import { TableTheme } from "./types";
import { colors } from "../../theme/colors";
import { rgba } from "polished";

export const dark: TableTheme = {
  background: rgba(colors.dimGray, 0.2),
  activeBackground: rgba(colors.dimGray, 0.1),
  border: rgba(colors.auroMetalSaurus, 0.2),
  titleColor: colors.white,
  scrollbarTrack: colors.dimGray,
  scrollbarThumb: colors.lightFrenchBeige,
  secondColor: colors.gray,
  color: colors.dimGray,
  activeColor: colors.lightFrenchBeige,
};

export const light: TableTheme = {
  background: rgba(colors.dimGray, 0.2),
  activeBackground: rgba(colors.dimGray, 0.1),
  border: rgba(colors.auroMetalSaurus, 0.2),
  titleColor: colors.white,
  scrollbarTrack: colors.dimGray,
  scrollbarThumb: colors.lightFrenchBeige,
  secondColor: colors.gray,
  color: colors.dimGray,
  activeColor: colors.lightFrenchBeige,
};
