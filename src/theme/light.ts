import { DefaultTheme } from "styled-components";
import { colors } from "./colors";
import { light as DarkLoadingSpinner } from "../components/LoadingSpinner/theme";
import { light as Breadcrumbs } from "../components/Breadcrumbs/theme";
import { light as Table } from "../components/Table/theme";
//Cards
import { light as Card } from "../components/Card/theme";
//Buttons
import { light as ButtonConfirmed } from "../components/Button/ButtonConfirmed/theme";
import { light as ButtonError } from "../components/Button/ButtonError/theme";
import { light as ButtonPrimary } from "../components/Button/ButtonPrimary/theme";
import { light as ButtonGray } from "../components/Button/ButtonGray/theme";
import { light as ButtonEmpty } from "../components/Button/ButtonEmpty/theme";
import { light as ButtonLight } from "../components/Button/ButtonLight/theme";
import { light as ButtonOutlined } from "../components/Button/ButtonOutlined/theme";
import { light as ButtonRadioChecked } from "../components/Button/ButtonRadioChecked/theme";
import { light as ButtonSecondary } from "../components/Button/ButtonSecondary/theme";
import { light as BaseButton } from "../components/Button/BaseButton/theme";
import { light as ThemeButton } from "../components/Button/ThemeButton/theme";

const lightTheme: DefaultTheme = {
  colors: colors,
  spinner: DarkLoadingSpinner,
  breadcrumbs: Breadcrumbs,
  table: Table,
  //Cards
  card: Card,
  //Buttons
  baseButton: BaseButton,
  buttonConfirmed: ButtonConfirmed,
  buttonError: ButtonError,
  buttonPrimary: ButtonPrimary,
  buttonGray: ButtonGray,
  buttonEmpty: ButtonEmpty,
  buttonLight: ButtonLight,
  buttonOutlined: ButtonOutlined,
  buttonRadioChecked: ButtonRadioChecked,
  buttonSecondary: ButtonSecondary,
  themeButton: ThemeButton,
};

export default lightTheme;
