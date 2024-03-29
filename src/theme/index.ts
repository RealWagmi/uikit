import { ThemeColors } from "./types";
import { ButtonsColors } from "./colors";

export interface UIKitTheme {
  colors: ThemeColors;
  buttons: ButtonsColors;
  background: string;
  primaryGradient: string
  primaryDarkGradient: string
}

export { default as dark } from "./dark";
export { default as light } from "./light";
