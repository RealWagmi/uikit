import { ThemeColors } from "./types";
import { ButtonsColors } from "./colors";

export interface UIKitTheme {
  colors: ThemeColors;
  buttons: ButtonsColors;
  background: string;
}

export * as dark from "./dark";
export * as light from "./light";
