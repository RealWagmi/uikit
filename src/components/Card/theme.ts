import { CardTheme } from "./types";
import { colors } from "../../theme/colors";
import { rgba } from "polished";

export const dark: CardTheme = {
  blueBackground: rgba(colors.indigo, 0.7),
  blueColor: colors.white,
  darkGrayBackground: colors.chineseBlack,
  grayBackground: colors.policeBlue,
  lightBorder: colors.darkJungleGreen,
  lightBackground: colors.chineseBlack,
  outlineBorder: colors.policeBlue,
  yellowColor: colors.violinBrown,
  yellowBackground: rgba(colors.princetonOrange, 0.05),
};

export const light: CardTheme = {
  blueBackground: rgba(colors.indigo, 0.7),
  blueColor: colors.white,
  darkGrayBackground: colors.chineseBlack,
  grayBackground: colors.policeBlue,
  lightBorder: colors.darkJungleGreen,
  lightBackground: colors.chineseBlack,
  outlineBorder: colors.policeBlue,
  yellowColor: colors.violinBrown,
  yellowBackground: rgba(colors.princetonOrange, 0.05),
};
