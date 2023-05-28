import { LoadingSpinnerTheme } from "../components/LoadingSpinner/types";
import { ThemeColors } from "./types";
import { BlueCardTheme } from "../components/Card/BlueCard/types";
import { DarkGrayCardTheme } from "../components/Card/DarkGrayCard/types";

export interface UIKitTheme {
  colors: ThemeColors;

  spinner: LoadingSpinnerTheme;
  blueCard: BlueCardTheme;
  darkGrayCard: DarkGrayCardTheme;
}

export { default as dark } from "./dark";
