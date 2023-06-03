import { LoadingSpinnerTheme } from "../components/LoadingSpinner/types";
import { ThemeColors } from "./types";
import { CardTheme } from "../components/Card/types";
import { BreadcrumbsTheme } from "../components/Breadcrumbs/types";
import { TableTheme } from "../components/Table/types";
import { ButtonConfirmedTheme } from "../components/Button/ButtonConfirmed/types";
import { ButtonErrorTheme } from "../components/Button/ButtonError/types";
import { ButtonPrimaryTheme } from "../components/Button/ButtonPrimary/types";
import { ButtonGrayTheme } from "../components/Button/ButtonGray/types";
import { ButtonEmptyTheme } from "../components/Button/ButtonEmpty/types";
import { ButtonLightTheme } from "../components/Button/ButtonLight/types";
import { ButtonOutlinedTheme } from "../components/Button/ButtonOutlined/types";
import { ButtonRadioCheckedTheme } from "../components/Button/ButtonRadioChecked/types";
import { ButtonSecondaryTheme } from "../components/Button/ButtonSecondary/types";
import { BaseButtonTheme } from "../components/Button/BaseButton/types";
import { ThemeButtonTheme } from "../components/Button/ThemeButton/types";

export interface UIKitTheme {
  colors: ThemeColors;
  spinner: LoadingSpinnerTheme;
  breadcrumbs: BreadcrumbsTheme;
  table: TableTheme;
  //Cards
  card: CardTheme;
  //Buttons
  baseButton: BaseButtonTheme;
  buttonConfirmed: ButtonConfirmedTheme;
  buttonError: ButtonErrorTheme;
  buttonPrimary: ButtonPrimaryTheme;
  buttonGray: ButtonGrayTheme;
  buttonEmpty: ButtonEmptyTheme;
  buttonLight: ButtonLightTheme;
  buttonOutlined: ButtonOutlinedTheme;
  buttonRadioChecked: ButtonRadioCheckedTheme;
  buttonSecondary: ButtonSecondaryTheme;
  themeButton: ThemeButtonTheme
}

export { default as dark } from "./dark";
export { default as light } from "./light";
