import { LoadingSpinnerTheme } from "../components/LoadingSpinner/types";
import { ThemeColors } from "./types";
import { BlueCardTheme } from "../components/Card/BlueCard/types";
import { DarkGrayCardTheme } from "../components/Card/DarkGrayCard/types";
import { GrayCardTheme } from "../components/Card/GrayCard/types";
import { LightCardTheme } from "../components/Card/LightCard/types";
import { OutlineCardTheme } from "../components/Card/OutlineCard/types";
import { YellowCardTheme } from "../components/Card/YellowCard/types";

export interface UIKitTheme {
  colors: ThemeColors;

  spinner: LoadingSpinnerTheme;
  blueCard: BlueCardTheme;
  darkGrayCard: DarkGrayCardTheme;
  grayCard: GrayCardTheme;
  lightCard: LightCardTheme;
  outlineCard: OutlineCardTheme;
  yellowCard: YellowCardTheme;
}

export { default as dark } from "./dark";
