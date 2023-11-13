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
    grad0: "#7DA0C1",
    grad1: "#34627D",
    hoverGrad0: "#91B9DE",
    hoverGrad1: "#40708B",
    text: "#5D93B2",
  },
  error: {
    grad0: "#966060",
    grad1: "#7d3434",
    text: "#966060",
  },
};
