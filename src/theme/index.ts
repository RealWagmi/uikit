import { LoadingSpinnerTheme } from "../components/LoadingSpinner/types";
import { ThemeColors } from "./types";
import { BlueCardTheme } from "../components/Card/BlueCard/types";
import { DarkGrayCardTheme } from "../components/Card/DarkGrayCard/types";
import { GrayCardTheme } from "../components/Card/GrayCard/types";
import { LightCardTheme } from "../components/Card/LightCard/types";
import { OutlineCardTheme } from "../components/Card/OutlineCard/types";
import { YellowCardTheme } from "../components/Card/YellowCard/types";
import { BreadcrumbsTheme } from "../components/Breadcrumbs/types";
import { TableTheme } from "../components/Table/types";

export interface UIKitTheme {
  colors: ThemeColors;

  spinner: LoadingSpinnerTheme;
  blueCard: BlueCardTheme;
  darkGrayCard: DarkGrayCardTheme;
  grayCard: GrayCardTheme;
  lightCard: LightCardTheme;
  outlineCard: OutlineCardTheme;
  yellowCard: YellowCardTheme;
  breadcrumbs: BreadcrumbsTheme;
  table: TableTheme;
}

export { default as dark } from "./dark";
