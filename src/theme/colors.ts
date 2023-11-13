import { ThemeColors } from "./types";
import { AppBtnColor } from "../components/AppBtn/types";

export const colors: ThemeColors = {
  black: "#000000",
  white: "#ffffff",
  light: "#f7f8f2",
  shadowLight: "#a9b6bf",
  strokeGray: "#616971",
  darkGray: "#7b8187",
  primaryDefault: "#5d93b2",
  primaryHovered: "#6da6c6",
  blueGray: "#8fa7b4",
  blueGrayLight: "#94bbd2",
  gray: "#6a757b",
};

type ButtonColorsConfig = {
  grad0: string;
  grad1: string;
  hoverGrad0?: string;
  hoverGrad1?: string;
  text: string;
};

export type ButtonsColors = { [key in AppBtnColor]: ButtonColorsConfig };
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
};
