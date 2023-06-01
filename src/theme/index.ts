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
import { ButtonErrorTheme } from "../components/Button/ButtonError/types";
import { ButtonPrimaryTheme } from "../components/Button/ButtonPrimary/types";
import { ButtonGrayTheme } from "../components/Button/ButtonGray/types";

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
  buttonError: ButtonErrorTheme,
  buttonPrimary: ButtonPrimaryTheme,
  buttonGray: ButtonGrayTheme,
}

export { default as dark } from "./dark";
export { default as light } from "./light";
