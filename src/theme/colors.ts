import { ThemeColors } from "./types";
import { ButtonColor } from "../components/Button/types";

export const colors: ThemeColors = {
  black: "#000000",
  white: "#ffffff",
  light: "#f7f8f2",
  shadowLight: "#a9b6bf",
  shadowDark: "#2d3643",
  strokeGray: "#616971",
  darkBg: "#1d2128",
  darkGray: "#7b8187",
  lightTextGray: "#3c454e",
  primaryDefault: "#5d93b2",
  primaryHovered: "#6da6c6",
  blueGray: "#8fa7b4",
  blueGrayLight: "#94bbd2",
  gray: "#6a757b",
  textGray: "#afb6c9",
  neutralLight: "#d9d9d9",
  shuttleGray: "#545d6b",
  ebonyGray: "#1f242e",
  green: "#638e5d",
  red: "#b84c45",
  yellow: "#c39905",
  bayouxBlue: "#566E81",
  bigStone: "#172539",
};

type ButtonColorsConfig = {
  grad0: string;
  grad1: string;
  hoverGrad0?: string;
  hoverGrad1?: string;
  text: string;
};

export type ButtonsColors = { [key in ButtonColor]: ButtonColorsConfig };
export const buttons: ButtonsColors = {
  primary: {
    grad0: "#7da0c1",
    grad1: "#34627d",
    hoverGrad0: "#91B9de",
    hoverGrad1: "#40708b",
    text: "#5d93b2",
  },
  error: {
    grad0: "#966060",
    grad1: "#7d3434",
    text: "#966060",
  },
  success: {
    grad0: "#6b7d66",
    grad1: "#4c623a",
    text: "#638e5d",
  },
};
