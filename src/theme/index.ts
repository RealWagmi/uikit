import { ThemeColors } from "./types";
import { ButtonsColors } from "./colors";
import { Z_INDEX } from "../constants";

export interface UIKitTheme {
  colors: ThemeColors;
  buttons: ButtonsColors;
  background: string;
  primaryGradient: string;
  primaryDarkGradient: string;
  zIndexes: typeof Z_INDEX
}

export { default as dark } from "./dark";
export { default as light } from "./light";
