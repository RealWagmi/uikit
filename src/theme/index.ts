import { ThemeColors } from "./types";

export interface UIKitTheme {
  colors: ThemeColors;
}

export { default as dark } from "./dark";
export { default as light } from "./light";
