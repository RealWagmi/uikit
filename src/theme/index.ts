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
import { ButtonConfirmedTheme } from "../components/Button/ButtonConfirmed/types";

export interface UIKitTheme {
  colors: ThemeColors;
  spinner: LoadingSpinnerTheme;
  breadcrumbs: BreadcrumbsTheme;
  table: TableTheme;
  //Cards
  blueCard: BlueCardTheme;
  darkGrayCard: DarkGrayCardTheme;
  grayCard: GrayCardTheme;
  lightCard: LightCardTheme;
  outlineCard: OutlineCardTheme;
  yellowCard: YellowCardTheme;
  //Buttons
  buttonConfirmed: ButtonConfirmedTheme
}

export { default as dark } from "./dark";
export { default as light } from "./light";
